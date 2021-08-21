import { Database } from "sqlite3";
import AppInterface from "../../app";
import Logger from '../../Logger';
import Table from "./Table";

export default class SqlDatabase {

    public static readonly SQL_LOGGER_LABEL: string = "Database-Sql";
    public static readonly SQL_DATABASE_FOLDER: string = "./data/";
    public static readonly SQL_DATABASE_FILE: string = "userdata.sqlite3";

    public static SetupDatabase(callback: Function): SqlDatabase {
        return new SqlDatabase(callback);
    }

    private TableList: Table[] = [];
    private database: Database;

    private constructor(callback: Function) {
        var logger: Logger = AppInterface.Logger;
        logger.info(SqlDatabase.SQL_LOGGER_LABEL, "Initializing Sql Database Manager");

        this.database = new Database(SqlDatabase.SQL_DATABASE_FOLDER + SqlDatabase.SQL_DATABASE_FILE, (err) => {
            if(err) {
                logger.err(SqlDatabase.SQL_LOGGER_LABEL, "Fetal: Error creating database: " + err);
                //force stop on error
                process.exit(1);
            }
            callback();
        });
    }

    public includeTable(table: Table) {
        this.TableList.push(table);
    }

    public getDatabase(): Database {
        return this.database;
    }

    public close(callback: Function): void {
        var logger: Logger = AppInterface.Logger;
        logger.info(SqlDatabase.SQL_LOGGER_LABEL, "Closing Sql Database");
        this.database.close((err) => {
            if(err) {
                logger.err(SqlDatabase.SQL_LOGGER_LABEL, "Sql Database failed to close! " + err);
            } else {
                logger.info(SqlDatabase.SQL_LOGGER_LABEL, "Database Closed");
            }
            callback();
        });
    }

}