import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PPChangeData } from 'src/app/app.component';
import { PpPic } from 'src/app/models/pppics/PpPic';
@Component({
  selector: 'app-change-ppdialog',
  templateUrl: './change-ppdialog.component.html',
  styleUrls: ['./change-ppdialog.component.css']
})
export class ChangePPDialogComponent {

  validPpPics;

  constructor(public dialogRef: MatDialogRef<PPChangeData>, @Inject(MAT_DIALOG_DATA) public data: PPChangeData) { 
    this.validPpPics = PpPic.validPpPics;
  }

  onCancel(): void {
    this.data.Cancelled = true;
    this.dialogRef.close(this.data);
  }
}
