import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { ButtonComponent } from './button/button.component';
import { BookingsTableComponent } from './bookings-table/bookings-table.component';
import { BottomModalComponent } from './bottom-modal/bottom-modal.component';
import { RequestComponent } from './request/request.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { MapComponent } from './map/map.component';
import { CameraComponent } from './camera/camera.component';
import { FiltersComponent } from './filters/filters.component';
import { DetailsCardComponent } from './details-card/details-card.component';
import { TrackerComponent } from './tracker/tracker.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ToggleButtonComponent,
    ButtonComponent,
    BookingsTableComponent,
    BottomModalComponent,
    RequestComponent,
    RequestDetailsComponent,
    MapComponent,
    CameraComponent,
    FiltersComponent,
    DetailsCardComponent,
    TrackerComponent
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    HeaderComponent,
    ToggleButtonComponent,
    ButtonComponent,
    BookingsTableComponent,
    BottomModalComponent,
    RequestComponent,
    RequestDetailsComponent,
    MapComponent,
    CameraComponent,
    FiltersComponent,
    DetailsCardComponent,
    TrackerComponent
  ],
})
export class ComponentsModule {}
