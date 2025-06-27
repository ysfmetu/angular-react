import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../services/reservation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-startcheckin',
  templateUrl: './startcheckin.component.html',
  styleUrls: ['./startcheckin.component.css']
})
export class StartcheckinComponent implements OnInit {
  reservationId: number | undefined;

  constructor(private service:ReservationService,private router:Router) { }

  ngOnInit(): void {
  }

  public onClick(){
  this.service.getReservation(this.reservationId).subscribe(
      (res: any)=>{
      this.service.reservationData=res;
      this.router.navigate(['checkIn'])
    }
  )
  }

}
