import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OldBookingsPageRoutingModule } from './old-bookings-routing.module';

import { OldBookingsPage } from './old-bookings.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OldBookingsPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [OldBookingsPage],
})
export class OldBookingsPageModule {}
