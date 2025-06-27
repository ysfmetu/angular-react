import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../services/reservation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-display-flight',
  templateUrl: './display-flight.component.html',
  styleUrls: ['./display-flight.component.css']
})
export class DisplayFlightComponent implements OnInit {
  data:any;

  constructor(private service :ReservationService,private router:Router) { }

  ngOnInit(): void {
    this.data=this.service.data
  }

  onSelect(id:number):any {
    return this.router.navigate(['/passengerDetails/'+id])

  }
}
