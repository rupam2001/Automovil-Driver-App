import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { ButtonComponent } from './button/button.component';
import { BookingsTableComponent } from './bookings-table/bookings-table.component';
import { BottomModalComponent } from './bottom-modal/bottom-modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ToggleButtonComponent,
    ButtonComponent,
    BookingsTableComponent,
    BottomModalComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    HeaderComponent,
    ToggleButtonComponent,
    ButtonComponent,
    BookingsTableComponent,
    BottomModalComponent,
  ],
})
export class ComponentsModule {}
