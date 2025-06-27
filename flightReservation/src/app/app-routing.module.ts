import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FindFlightComponent} from "./components/find-flight/find-flight.component";
import {DisplayFlightComponent} from "./components/display-flight/display-flight.component";
import {PassengerDetailComponent} from "./components/passenger-detail/passenger-detail.component";
import {ConfirmReservationComponent} from "./components/confirm-reservation/confirm-reservation.component";
import {StartcheckinComponent} from "./components/startcheckin/startcheckin.component";
import {CheckinComponent} from "./components/checkin/checkin.component";
import {ConfirmcheckComponent} from "./components/confirmcheck/confirmcheck.component";

const routes: Routes = [
  {path:'', redirectTo:'',pathMatch:'full'},
  {
    path:'findFlights',
    component:FindFlightComponent
  },
  {
    path:'displayFlights',
    component:DisplayFlightComponent
  },
  {
    path:'passengerDetails/:id',
    component:PassengerDetailComponent
  },
  {
    path:'confirm/:id',
    component:ConfirmReservationComponent
  },
  {
    path:'startCheckIn',
    component:StartcheckinComponent
  },
  {
    path:'checkIn',
    component:CheckinComponent
  },
  {
    path:'confirmCheck',
    component:ConfirmcheckComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
