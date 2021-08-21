import { Database } from "sqlite3";
import Table from "../Table";

export default class UsersTable extends Table {
    private static readonly SQL_TABLE_USER: string = "Users";

    public setupTable(): void {
        this.DatabaseManager.getDatabase().run(
            `CREATE TABLE IF NOT EXISTS ${UsersTable.SQL_TABLE_USER} ` + 
            "(id INTEGER PRIMARY KEY, 'username' VARCHAR(25) UNIQUE NOT NULL, 'password' CHAR(64) NOT NULL, 'salt CHAT(10) NOT NULL')" 
            );
    }
}