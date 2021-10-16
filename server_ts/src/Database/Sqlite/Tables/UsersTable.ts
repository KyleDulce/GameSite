import SqlDatabase from "../SqlDatabase";
import Table from "../Table";
import AppInterface from "../../../app";
import { createHash } from "crypto";

export default class UsersTable extends Table {

    //table name
    private static readonly SQL_TABLE_USER: string = "Users";

    //column names
    private static readonly SQL_COL_ID: string = "id";
    private static readonly SQL_COL_USER: string = "username";
    private static readonly SQL_COL_PASS: string = "password";
    private static readonly SQL_COL_SALT: string = "salt";

    //constants
    //password hash number of times
    private static readonly PASSWORD_HASH_NUM: number = 20;

    public setupTable(): void {
        this.DatabaseManager.getDatabase().run(
            `CREATE TABLE IF NOT EXISTS ${UsersTable.SQL_TABLE_USER} ` + 
            `('${UsersTable.SQL_COL_ID}' INTEGER PRIMARY KEY, '${UsersTable.SQL_COL_USER}' VARCHAR(25) UNIQUE NOT NULL,` + 
            ` '${UsersTable.SQL_COL_PASS}' CHAR(64) NOT NULL, '${UsersTable.SQL_COL_SALT}' CHAT(10) NOT NULL)` 
        );
    }

    public addNewUser(id: number, username: string, passwordHash: string, salt: string, callback: (success: boolean) => any): void {
        //check if data is indeed new
        //check for unique id
        username = username.toLowerCase();
        this.DatabaseManager.getDatabase().get(
            `SELECT * FROM "${UsersTable.SQL_TABLE_USER}" WHERE ` + 
            `(${UsersTable.SQL_TABLE_USER}.${UsersTable.SQL_COL_USER}=="${username}" OR ` + 
            `${UsersTable.SQL_TABLE_USER}.${UsersTable.SQL_COL_ID}==${id})`,
            (err, row) => {
                if(err != null) {
                    AppInterface.Logger.err(SqlDatabase.SQL_LOGGER_LABEL, "Error when creating new user: " + err); 
                    callback(false);
                } else if(row != undefined) {
                    AppInterface.Logger.warn(SqlDatabase.SQL_LOGGER_LABEL, "Unable to add new user: Username or Id already exists");
                    callback(false);
                } else {

                    //is unique add user
                    this.DatabaseManager.getDatabase().run(
                        `INSERT INTO ${UsersTable.SQL_TABLE_USER} (` + 
                        `'${UsersTable.SQL_COL_ID}', '${UsersTable.SQL_COL_USER}', '${UsersTable.SQL_COL_PASS}',` + 
                        ` '${UsersTable.SQL_COL_SALT}') ` + 
                        `VALUES ` + 
                        `(${id}, "${username}", "${this.getPasswordHash(passwordHash, salt)}", "${salt}")`, 
                    [], (err) => {
                        if(err != null) {
                            AppInterface.Logger.err(SqlDatabase.SQL_LOGGER_LABEL, "Error when creating new user: " + err);
                        }
                    });

                    AppInterface.Logger.info(SqlDatabase.SQL_LOGGER_LABEL, "New user added to users table");
                    callback(true);
                }
            }
        );
    }

    public isUserValid(username: string, callback: (success: boolean) => any):void {
        this.hasValidEntry(UsersTable.SQL_COL_USER, username, callback);
    }

    public hasValidEntry(col: string, data: string, callback: (success: boolean) => any) {
        this.DatabaseManager.getDatabase().get(
            `SELECT * FROM "${UsersTable.SQL_TABLE_USER}" WHERE (${UsersTable.SQL_TABLE_USER}.${col}=="${data}}"`,
            (err, row) => {
                if(err) {
                    AppInterface.Logger.err(SqlDatabase.SQL_LOGGER_LABEL, "Error when checking for valid entry " + err);
                } else {
                    callback(row != undefined);
                }
            }
        );
    }

    public getIdFromUser(username: string, callback: (result: number | undefined) => any): void {
        this.DatabaseManager.getDatabase().get(
            `SELECT "${UsersTable.SQL_COL_ID}" FROM "${UsersTable.SQL_TABLE_USER}" WHERE (${UsersTable.SQL_TABLE_USER}.${UsersTable.SQL_COL_USER}=="${username}")`,
            (err, row) => {
                if(err) {
                    AppInterface.Logger.err(SqlDatabase.SQL_LOGGER_LABEL, "Error when getting Id from username: " + err);
                } else if(row != undefined) {
                    callback(row);
                } else {
                    AppInterface.Logger.warn(SqlDatabase.SQL_LOGGER_LABEL, `Get Id from Username '${username}' is undefined.`);
                    callback(undefined);
                }
            }
        )
    }

    public getSaltFromId(id: number, callback: (result: string | undefined) => any): void {
        this.DatabaseManager.getDatabase().get(
            `SELECT "${UsersTable.SQL_COL_SALT}" FROM "${UsersTable.SQL_TABLE_USER}" WHERE (${UsersTable.SQL_TABLE_USER}.${UsersTable.SQL_COL_ID}=="${id.toString()}")`,
            (err, row) => {
                if(err) {
                    AppInterface.Logger.err(SqlDatabase.SQL_LOGGER_LABEL, "Error when getting salt from id: " + err);
                } else if(row != undefined) {
                    callback(row);
                } else {
                    AppInterface.Logger.warn(SqlDatabase.SQL_LOGGER_LABEL, `Get Salt from Id '${id.toString()}' is undefined.`);
                    callback(undefined);
                }
            }
        )
    }

    // public getSaltFromUsername(username: string, callback: (result: string | undefined) => any): void {
    //     this.getIdFromUser(username, (result) => {
    //         if(result != undefined) {
    //             this.getSaltFromId(result, callback);
    //         } else {
    //             callback(undefined);
    //         }
    //     });
    // }

    public compareUserCredentials(username: string, password: string, callback: (valid: boolean) => any): void {
        this.isUserValid(username, (success) => {
            if(!success) {
                callback(false);
            } else {
                this.getIdFromUser(username, (result) => {
                    if(result != undefined) {
                        var id = result;

                        this.getSaltFromId(id, (result) => {
                            if(result != undefined) {
                                var salt = result;

                                //get final password hash
                                var passhash = this.getPasswordHash(password, salt);

                                this.DatabaseManager.getDatabase().get(
                                    `SELECT "${UsersTable.SQL_COL_PASS}" FROM "${UsersTable.SQL_TABLE_USER}" WHERE ` + 
                                    `(${UsersTable.SQL_TABLE_USER}.${UsersTable.SQL_COL_ID}=="${id.toString()}" AND ` + 
                                    ` ${UsersTable.SQL_TABLE_USER}.${UsersTable.SQL_COL_PASS}=="${passhash}")`, 
                                    (err, row) => {
                                        if(err) {
                                            AppInterface.Logger.err(SqlDatabase.SQL_LOGGER_LABEL, "Error on verifying password: " + err);
                                            callback(false);
                                        } else if(row == undefined) {
                                            callback(false);
                                        } else {
                                            callback(true);
                                        }
                                    }
                                )
                            } else {
                                callback(false);
                            }
                        });
                    } else {
                        callback(false);
                    }
                });
            }
        });
    }

    private getPasswordHash(passwordHash: string, salt: string): string {
        var hash = createHash('sha256');
        var result = passwordHash + salt;

        //run certain number of times
        for(var x: number = 0; x < UsersTable.PASSWORD_HASH_NUM; x++) {
            var data = hash.update(result);
            result = data.digest('hex');
        }

        return result;
    }

}