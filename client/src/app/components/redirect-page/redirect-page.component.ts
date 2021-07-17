import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect-page',
  templateUrl: './redirect-page.component.html',
  styleUrls: ['./redirect-page.component.css']
})
export class RedirectPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.reload();
  }

}
