import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string= 'janakiiapp';
  username:string="janaki";
  signup:string="Ram";
  changeDate()  {
    this.username="janaki";
    this.signup="ram";
    }

  }
