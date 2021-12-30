import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RequestDetailsComponent } from '../../components/request-details/request-details.component';
import { RequestComponent } from '../../components/request/request.component';
import { Filters, MODALS } from '../../constants';
import { BookingsApiService } from '../../services/bookings-api.service';
import { GlobalStatesService } from '../../services/global-states.service';
import { UiServiceService } from '../../services/ui-service.service';
import { BookingsType, FilterType, TaskType } from '../../types';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  filters = Filters;
  activeFilter: FilterType;
  currentBookingsContent: BookingsType[] = [];
  Task: TaskType = {
    source_name: 'Rupam Jyoti Das',
    source_phone_number: '8638047859',
    source_location: 'Machorhat, Jorhat, 785001',
    destination_name: 'Lamborghini Garage ',
    destination_location: 'JEC road, Jorhat, 785007',
    destination_phone_number: '9876543210',
    timestamp: '4:00 pm',
    pickup_time: '5:30pm',
    booking_id: '123',
    category: 'Customer-to-Garage',
  };
  hasRequest: boolean = true;

  constructor(
    private globalStatesService: GlobalStatesService,
    private uiService: UiServiceService,
    private bookingsApiService: BookingsApiService,
    private modalController: ModalController
  ) {
    this.globalStatesService
      .getCurrentActiveFilter()
      .subscribe((_activeFilter) => {
        this.activeFilter = _activeFilter;
      });
    this.uiService
      .onFilterChange()
      .subscribe((_newFilter) => (this.activeFilter = _newFilter));
    this.bookingsApiService
      .getAllBookingsAsync()
      .then((bookingsPromise) =>
        bookingsPromise.subscribe(
          (_bookings) => (this.currentBookingsContent = _bookings)
        )
      );
  }

  onClickFilter(filter: FilterType) {
    this.globalStatesService.setCurrentActiveFilter(filter);
    this.uiService.setActiveFilter(filter);
  }

  onClickCheckRequest() {}

  async showModalAsync() {
    const modal = await this.modalController.create({
      component: RequestComponent,
      componentProps: {
        Task: this.Task,
        modalController: this.modalController,
      },
      backdropDismiss: false,
      initialBreakpoint: 0.4,
      cssClass: 'modal-class',
    });
    modal.present();
    modal.onDidDismiss().then((data) => {
      this.showDetailsModalAsync();
    });
  }
  async showDetailsModalAsync() {
    const modal = await this.modalController.create({
      component: RequestDetailsComponent,
      componentProps: {
        Task: this.Task,
        modalController: this.modalController,
      },
      backdropDismiss: false,
      initialBreakpoint: 0.8,
      cssClass: 'modal-class',
    });
    modal.present();
    modal.onDidDismiss().then((data) => {});
  }

  ionViewWillEnter() {
    // this.showModalAsync();
  }
}
