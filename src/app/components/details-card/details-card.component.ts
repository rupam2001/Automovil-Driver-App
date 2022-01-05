import { Component, OnInit, Input } from '@angular/core';
import { TaskType } from 'src/app/types';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss'],
})


export class DetailsCardComponent implements OnInit {
  @Input() header: string;
  @Input() bookingDetails: TaskType;
  
  showContent: boolean = true;
  constructor() { }

  ngOnInit() {}
}
