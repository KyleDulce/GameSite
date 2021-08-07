import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect-page',
  templateUrl: './redirect-page.component.html',
  styleUrls: ['./redirect-page.component.css']
})
export class RedirectPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Hey listen im working im working hey listen hey hey listen")
    window.location.reload();
  }

}
