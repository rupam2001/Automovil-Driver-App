import { Component, OnInit } from '@angular/core';
import { BookingsType } from 'src/app/types';

@Component({
  selector: 'app-current-booking',
  templateUrl: './current-booking.page.html',
  styleUrls: ['./current-booking.page.scss'],
})
export class CurrentBookingPage implements OnInit {
  currentBookingsContent: BookingsType[] = [];
  constructor() {}

  ngOnInit() {}
}
