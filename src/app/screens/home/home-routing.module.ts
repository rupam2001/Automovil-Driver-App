import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentBookingPage } from '../current-booking/current-booking.page';
import { OldBookingsPage } from '../old-bookings/old-bookings.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'current-booking',
        component: CurrentBookingPage,
      },
      {
        path: 'old-bookings',
        component: OldBookingsPage,
      },
      {
        path: '',
        redirectTo: '/home/old-bookings',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
