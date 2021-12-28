import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { TASKCATEGORY } from 'src/app/constants';
import { TaskType } from 'src/app/types';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss'],
})
export class RequestDetailsComponent implements OnInit {
  @Input() Task: TaskType;
  @Input() modalController: ModalController;
  Categories = TASKCATEGORY;

  constructor(private toastController: ToastController) {}

  ngOnInit() {}

  onClickReject() {
    this.modalController.dismiss();
    this.showToastAsync('You have rejected the request.');
  }
  onClickAccept() {
    this.modalController.dismiss();
    this.showToastAsync('You Have Accepted the Request');
  }

  showToastAsync(message: string, duration: number = 2000) {
    this.toastController
      .create({
        message,
        duration,
      })
      .then((toast) => toast.present());
  }
}
