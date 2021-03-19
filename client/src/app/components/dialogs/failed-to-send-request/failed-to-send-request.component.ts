import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-failed-to-send-request',
  templateUrl: './failed-to-send-request.component.html',
  styleUrls: ['./failed-to-send-request.component.css']
})
export class FailedToSendRequestComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

}
