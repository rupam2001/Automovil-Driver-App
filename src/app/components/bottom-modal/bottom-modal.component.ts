import { Component, Input, OnInit } from '@angular/core';
import { TaskType } from 'src/app/types';

@Component({
  selector: 'app-bottom-modal',
  templateUrl: './bottom-modal.component.html',
  styleUrls: ['./bottom-modal.component.scss'],
})
export class BottomModalComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() Task: TaskType;
  isExpanded: boolean = false;

  constructor() {}

  ngOnInit() {}
  onClickCheck() {
    this.isExpanded = true;
  }
}
