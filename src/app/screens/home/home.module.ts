import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { OldBookingsPageModule } from '../old-bookings/old-bookings.module';
import { OldBookingsPage } from '../old-bookings/old-bookings.page';
import { CurrentBookingPage } from '../current-booking/current-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [HomePage, OldBookingsPage, CurrentBookingPage],
})
export class HomePageModule {}
