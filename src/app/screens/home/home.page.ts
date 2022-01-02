import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { StorageKeys, StorageService } from 'src/app/services/storage.service';
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
  // currentBookingsContent: BookingsType[] = [];
  disabledFilter = 'Current';

  Task: TaskType;
  hasRequest: boolean = false;

  constructor(
    private globalStatesService: GlobalStatesService,
    private uiService: UiServiceService,
    private bookingsApiService: BookingsApiService,
    private modalController: ModalController,
    private toastController: ToastController,
    private storageService: StorageService,
    private router: Router
  ) {
    this.globalStatesService
      .getCurrentActiveFilter()
      .subscribe((_activeFilter) => {
        this.activeFilter = _activeFilter;
      });
    this.uiService
      .onFilterChange()
      .subscribe((_newFilter) => (this.activeFilter = _newFilter));
    // this.bookingsApiService
    //   .getAllBookingsAsync()
    //   .then((bookingsPromise) =>
    //     bookingsPromise.subscribe(
    //       (_bookings) => (this.currentBookingsContent = _bookings)
    //     )
    //   );
    this.uiService.onCurrentRequestChange().subscribe((requestData) => {
      this.Task = requestData;
      this.hasRequest = true;
      this.showModalAsync();
    });
    this.uiService.checkForPendingNotification();
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
    modal.onDidDismiss().then((data) => {
      if (data.data.accept) this.handleAcceptAsync();
      else if (!data.data.accept) this.handleRejectAsync();
    });
  }
  async handleAcceptAsync() {
    //remove it from storage
    await this.storageService.remove(StorageKeys.NotificationDataKey);
    // api call for accept
    await this.bookingsApiService.acceptRequestAsync();
    // unable the Current section and navigate to there
    this.showToastAsync('Request Accepted');
  }
  async handleRejectAsync() {
    // remove it from storage
    await this.storageService.remove(StorageKeys.NotificationDataKey);
    // api call for reject
    await this.bookingsApiService.rejectRequestAsync();
    this.showToastAsync('Request Rejected');
  }

  async showToastAsync(message: string, duration: number = 2000) {
    this.toastController
      .create({
        message,
        duration,
      })
      .then((toast) => toast.present());
  }
  ionViewWillEnter() {
    // this.router.navigateByUrl('home/current-booking');
  }
}

// {
//   source_name: 'Rupam Jyoti Das',
//   source_phone_number: '8638047859',
//   source_location: 'Machorhat, Jorhat, 785001',
//   destination_name: 'Lamborghini Garage ',
//   destination_location: 'JEC road, Jorhat, 785007',
//   destination_phone_number: '9876543210',
//   timestamp: '4:00 pm',
//   pickup_time: '5:30 pm',
//   booking_id: '123',
//   category: 'Customer-to-Garage',
// };
