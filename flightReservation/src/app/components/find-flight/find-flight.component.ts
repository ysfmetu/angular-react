import { Component, OnInit } from '@angular/core';
import {Criteria} from "../../model/criteria";
import {ReservationService} from "../../services/reservation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-find-flight',
  templateUrl: './find-flight.component.html',
  styleUrls: ['./find-flight.component.css']
})
export class FindFlightComponent implements OnInit {

  criteria:Criteria=new Criteria("","","");

  constructor(private service:ReservationService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.getFlights(this.criteria).subscribe((response:any)=>{
      this.service.data=response;
      console.log(response);
      this.router.navigate(['/displayFlights'])
      }
    )
  }
}
