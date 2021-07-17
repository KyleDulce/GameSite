import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeNameComponent } from './components/dialogs/change-name/change-name.component';
import { InvalidNameComponent } from './components/dialogs/invalid-name/invalid-name.component';
import { PpPic } from 'src/app/models/pppics/PpPic';
import { ChangePPDialogComponent } from './components/dialogs/changepp/change-ppdialog/change-ppdialog.component';
import { ChangeDetectorRef } from '@angular/core';
import { FailedToSendRequestComponent } from './components/dialogs/failed-to-send-request/failed-to-send-request.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public static LOCAL_USERNAME_STORE = "GSUser";
  public static LOCAL_PP_STORE = "GSPfp";

  title = 'Kyle\'s Game Site';

  UserName: string;
  private inputField: string;
  pp_pic: string = "assets/IllegalPage/cry.png";
  private inputpp: number = 0;

  constructor(private matDialog: MatDialog, private ref: ChangeDetectorRef, private router: Router) {
    var str = localStorage.getItem(AppComponent.LOCAL_USERNAME_STORE);
    var ppstr = localStorage.getItem(AppComponent.LOCAL_PP_STORE);
    if (str == null || str == "undefined" || ppstr == null || ppstr == "undefined") {

      console.log("Null User, generating");
      this.UserName = "Guest" + Math.floor(Math.random() * Math.floor(10000));
      localStorage.setItem(AppComponent.LOCAL_USERNAME_STORE, this.UserName);

      this.inputpp = 0;
      this.pp_pic = PpPic.validPpPics[0];
      localStorage.setItem(AppComponent.LOCAL_PP_STORE, "0");

      //ref.detectChanges();
    } else {
      console.log("Name is " + str);
      this.UserName = str;

      this.inputpp = parseInt(ppstr);
      this.pp_pic = PpPic.validPpPics[this.inputpp];
    }
  }

  changeNameButton() {
    const dialogRef = this.matDialog.open(ChangeNameComponent, { data: { OldName: this.UserName, NewName: this.inputField, Cancelled: false } });

    dialogRef.afterClosed().subscribe(result => {

      if (!result.Cancelled) {
        this.inputField = result.NewName;
        this.changeName();
      }
    });
  }

  changePpButton() {
    const dialogRef = this.matDialog.open(ChangePPDialogComponent, {data: {NewPP: this.inputpp, Cancelled: false}});

    dialogRef.afterClosed().subscribe(result => {
      if (!result.Cancelled) {
        this.inputpp = result.NewPP;
        this.changePp();
        this.ref.detectChanges();
      }
    });
  }

  changeName() {
    if (this.inputField != null && this.inputField != "undefined" && this.inputField != '') {
      this.UserName = this.inputField;
      this.inputField = '';
      localStorage.setItem(AppComponent.LOCAL_USERNAME_STORE, this.UserName);
    } else {
      this.matDialog.open(InvalidNameComponent);
    }
  }

  changePp() {
    if (this.inputpp != null && this.inputpp >= 0) {
      console.log("changed to " + this.inputpp)
      this.pp_pic = PpPic.validPpPics[this.inputpp];
      localStorage.setItem(AppComponent.LOCAL_PP_STORE, this.inputpp.toString());
    }
  }


}

export interface NameChangeData {
  OldName: string;
  NewName: string;
  Cancelled: boolean;
}

export interface PPChangeData {
  NewPP: number;
  Cancelled: boolean;
}