import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EstimatedTimeComponent } from 'src/app/components/estimated-time/estimated-time.component';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { BookingsType, trackType } from 'src/app/types';

@Component({
  selector: 'app-current-booking',
  templateUrl: './current-booking.page.html',
  styleUrls: ['./current-booking.page.scss'],
})
export class CurrentBookingPage implements OnInit {
  currentBookingsContent: BookingsType[] = [];
  header: string = 'Bookings Details';

  currentTracks: trackType[] = [];
  showNotificationBtn = false;
  unAbleNotificationBtn = false;
  headMsg = '';

  constructor(
    private uiService: UiServiceService,
    private modalController: ModalController
  ) {
    this.currentTracks = this.uiService.tracksAfterRequestAccept;
    this.uiService.onChangeCurrentTrack().subscribe((_tracks) => {
      if (_tracks.filter((t) => !t.isDone).length == 0) {
        //all tasks inside track has been completed
        this.unAbleNotificationBtn = true;
      }
      this.currentTracks = _tracks;
    });
    if (this.currentTracks == this.uiService.tracksAfterRequestAccept) {
      this.showNotificationBtn = true;
    }

    this.uiService
      .onChangeCurrentTabHeadingMsg()
      .subscribe((msg) => (this.headMsg = msg));
  }
  onClickSendNotification() {
    //api call here
    this.uiService.setCurrentTabHeadingMsg('Waiting For Garage Response');
    this.unAbleNotificationBtn = false;

    setTimeout(() => {
      // will be from garage as notification
      this.showEstimatedTimeModalAsync();
    }, 2000);
  }

  goToGarageDetailsPart() {
    this.header = 'Garage Details ';
  }

  async showEstimatedTimeModalAsync() {
    const modal = await this.modalController.create({
      component: EstimatedTimeComponent,
      componentProps: {
        modalController: this.modalController,
      },
      backdropDismiss: false,
      initialBreakpoint: 0.4,
      cssClass: 'modal-class',
    });
    modal.present();
    modal.onDidDismiss().then((data) => {
      if (data.data.continue) {
      }
    });
  }

  ngOnInit() {
    // this.showEstimatedTimeModalAsync();
  }
}
