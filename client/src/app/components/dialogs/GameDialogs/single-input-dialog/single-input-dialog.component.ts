import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-single-input-dialog',
  templateUrl: './single-input-dialog.component.html',
  styleUrls: ['./single-input-dialog.component.css']
})
export class SingleInputDialogComponent {

  constructor(public dialogRef: MatDialogRef<SingleInputDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {title: string, output: string, cancel: boolean}) { }

  onCancel() {
    this.data.cancel = true;
    this.dialogRef.close(this.data);
  }

  onSubmit() {
    this.data.cancel = false;
    this.dialogRef.close(this.data);
  }

}
