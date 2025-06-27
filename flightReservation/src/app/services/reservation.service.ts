import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Criteria} from "../model/criteria";
import {Reservation} from "../model/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  flightUrl:string="http://localhost:8080/api/flights"
  reservationUrl:string="http://localhost:8080/api/reservations/"
  data:any;
  reservationData:any;

  constructor(private _httpClient:HttpClient) { }

  public getFlights(criteria:Criteria):any{

    return this._httpClient.get(this.flightUrl+"?from="+criteria.from+"&to="+criteria.to+"&dateOfDeparture="+criteria.departureDate)
  }
  public getFlight(id:number){
    return this._httpClient.get(this.flightUrl+"/"+id)
  }
  public  saveReservation(resarvation:Reservation):any{
    return this._httpClient.post(this.reservationUrl,resarvation);
  }
  public getReservation(id: number | undefined):any{
   return this._httpClient.get(this.reservationUrl+id)
  }
  public checkIn(checkInRequest:any):any{
    return this._httpClient.put(this.reservationUrl,checkInRequest);
  }
}
