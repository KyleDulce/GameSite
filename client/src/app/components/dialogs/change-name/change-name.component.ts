import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NameChangeData } from 'src/app/app.component';

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.css']
})
export class ChangeNameComponent {

  title = 'ChangeName';

  inputField: string;

  constructor(public dialogRef: MatDialogRef<ChangeNameComponent>, @Inject(MAT_DIALOG_DATA) public data: NameChangeData) { }

  onCancel(): void {
    this.data.Cancelled = true;
    this.dialogRef.close(this.data);
  }

}
