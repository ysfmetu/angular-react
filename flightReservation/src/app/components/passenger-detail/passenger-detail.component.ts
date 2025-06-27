import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../services/reservation.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Reservation} from "../../model/reservation";

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.css']
})
export class PassengerDetailComponent implements OnInit {
  flightData:any;
  reservation:Reservation=new Reservation("","","","","","","","")

  constructor(private service:ReservationService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getFlight(Number.parseInt(<string>this.route.snapshot.params['id']))
      .subscribe(res=>{
        this.flightData=res;
    })
  }
  public onSubmit():any{
    this.reservation.flightId=this.flightData.id;
    this.service.saveReservation(this.reservation).subscribe((res: { id: string | number; })=>{
      this.router.navigate(['/confirm',res.id]);
    });

  }

}
