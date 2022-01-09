import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-estimated-time',
  templateUrl: './estimated-time.component.html',
  styleUrls: ['./estimated-time.component.scss'],
})
export class EstimatedTimeComponent implements OnInit {
  @Input() modalController: ModalController;
  constructor() {}

  ngOnInit() {}
}
