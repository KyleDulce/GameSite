import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-spec-or-play',
  templateUrl: './spec-or-play.component.html',
  styleUrls: ['./spec-or-play.component.css']
})
export class SpecOrPlayComponent {

  constructor(public dialogRef: MatDialogRef<SpecOrPlayComponent>, @Inject(MAT_DIALOG_DATA) public data: boolean) { }

}
