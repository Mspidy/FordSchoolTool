import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  showBanner = true;

  closeBanner() {
    this.showBanner = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
