import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-confirm-reservation',
  templateUrl: './confirm-reservation.component.html',
  styleUrls: ['./confirm-reservation.component.css']
})
export class ConfirmReservationComponent implements OnInit {
  reservationId: number | undefined;

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.reservationId=Number.parseInt(<string>this.router.snapshot.paramMap.get("id"));
  }

}
