import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskType } from 'src/app/types';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() Task: TaskType;
  @Input() modalController: ModalController;
  constructor() {}

  ngOnInit() {}

  onClickCheck() {
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss({});
  }
}
