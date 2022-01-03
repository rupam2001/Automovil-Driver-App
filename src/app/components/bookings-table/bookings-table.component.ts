import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookingsType } from 'src/app/types';

@Component({
  selector: 'app-bookings-table',
  templateUrl: './bookings-table.component.html',
  styleUrls: ['./bookings-table.component.scss'],
})
export class BookingsTableComponent implements OnInit {
  @Input() bookings: BookingsType[] = [];
  @Input() isLoading: boolean = false;

  @Output() onClickPrevPageEvent: EventEmitter<any> = new EventEmitter();
  @Output() onClickNextPageEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClickNextPage() {
    this.onClickNextPageEvent.emit();
  }
  onClickPrevPage() {
    this.onClickPrevPageEvent.emit();
  }
}
