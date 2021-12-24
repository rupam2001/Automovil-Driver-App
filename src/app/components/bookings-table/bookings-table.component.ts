import { Component, Input, OnInit } from '@angular/core';
import { BookingsType } from 'src/app/types';

@Component({
  selector: 'app-bookings-table',
  templateUrl: './bookings-table.component.html',
  styleUrls: ['./bookings-table.component.scss'],
})
export class BookingsTableComponent implements OnInit {
  @Input() bookings: BookingsType[] = [
    {
      booking_id: '12345',
      booking_date: '22-12-2021',
    },
    {
      booking_id: '12346',
      booking_date: '21-12-2021',
    },
    {
      booking_id: '12347',
      booking_date: '20-12-2021',
    },
    {
      booking_id: '12348',
      booking_date: '19-12-2021',
    },
    {
      booking_id: '12348',
      booking_date: '19-12-2021',
    },
    {
      booking_id: '12348',
      booking_date: '19-12-2021',
    },
    {
      booking_id: '12348',
      booking_date: '19-12-2021',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
