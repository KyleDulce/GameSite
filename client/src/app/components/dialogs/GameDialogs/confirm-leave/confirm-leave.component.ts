import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-leave',
  templateUrl: './confirm-leave.component.html',
  styleUrls: ['./confirm-leave.component.css']
})
export class ConfirmLeaveComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmLeaveComponent>, @Inject(MAT_DIALOG_DATA) public data: boolean) { }

}
