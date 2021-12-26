import { Component, Input, OnInit } from '@angular/core';
import { BookingsType } from 'src/app/types';

@Component({
  selector: 'app-bookings-table',
  templateUrl: './bookings-table.component.html',
  styleUrls: ['./bookings-table.component.scss'],
})
export class BookingsTableComponent implements OnInit {
  @Input() bookings: BookingsType[] = [];
  @Input() isLoading: boolean = false;

  constructor() {}

  ngOnInit() {}
}
