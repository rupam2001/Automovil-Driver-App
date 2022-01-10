import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-estimated-time',
  templateUrl: './estimated-time.component.html',
  styleUrls: ['./estimated-time.component.scss'],
})
export class EstimatedTimeComponent implements OnInit {
  @Input() modalController: ModalController;
  @Input() estimatedTime: string = '02:00';
  isShowTaskCompletePart: boolean = true;

  constructor(private uiService: UiServiceService) {}

  ngOnInit() {}
  onClickContinue() {
    this.modalController.dismiss({ continue: true, markascomplete: false });
  }
  onClickMarkAsComplete() {
    this.modalController.dismiss({ continue: false, markascomplete: true });
  }
}
