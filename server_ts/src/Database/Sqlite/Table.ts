import SqlDatabase from "./SqlDatabase";

export default abstract class Table {
    public abstract setupTable(): void;

    protected DatabaseManager: SqlDatabase;

    public constructor(DatabaseManager: SqlDatabase) {
        this.DatabaseManager = DatabaseManager;
        this.DatabaseManager.includeTable(this);
    }
}