import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OldBookingsPage } from './old-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: OldBookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OldBookingsPageRoutingModule {}
