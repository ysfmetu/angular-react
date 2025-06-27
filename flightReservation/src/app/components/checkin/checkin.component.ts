import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../services/reservation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {
  noOfbags: Number | undefined;
  data1:any;

  constructor(private service:ReservationService,private router:Router) { }

  ngOnInit(): void {
    this.data1=this.service.reservationData;
  }
  public checkIn(){
    let request = {
      "reservationId": this.data1.id,
      "checkIn": true,
      "numberOfBags": this.noOfbags
    }
    this.service.checkIn(request).subscribe((res:any)=>{
      this.router.navigate(['/confirmCheck']);
    })
  }

}
