import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindFlightComponent } from './components/find-flight/find-flight.component';
import { DisplayFlightComponent } from './components/display-flight/display-flight.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { ConfirmReservationComponent } from './components/confirm-reservation/confirm-reservation.component';
import {ReservationService} from "./services/reservation.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CheckinComponent } from './components/checkin/checkin.component';
import { StartcheckinComponent } from './components/startcheckin/startcheckin.component';
import { ConfirmcheckComponent } from './components/confirmcheck/confirmcheck.component';

@NgModule({
  declarations: [
    AppComponent,
    FindFlightComponent,
    DisplayFlightComponent,
    PassengerDetailComponent,
    ConfirmReservationComponent,
    CheckinComponent,
    StartcheckinComponent,
    ConfirmcheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ReservationService],
  bootstrap: [FindFlightComponent]
})
export class AppModule { }
