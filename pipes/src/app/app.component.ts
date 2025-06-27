import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myDate:Date=new Date();
  title = 'yusuf ülkü';
  myMoney:number=120000;
  myObj={name:"ysf",salary:5000};
  muNumber=1586.478941;
}
