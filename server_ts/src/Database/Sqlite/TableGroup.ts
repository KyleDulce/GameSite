import Table from "./Table";

export default abstract class TableGroup extends Table {
    protected tables: Table[] = [];

    public setupTable(): void  {
        this.tables.forEach((t) => {
            t.setupTable();
        });
    }
    public closeTable(): void {
        this.tables.forEach((t) => {
            t.closeTable();
        });
    }
}