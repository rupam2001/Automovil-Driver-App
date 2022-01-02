import { Component, OnInit } from '@angular/core';
import { BookingsApiService } from 'src/app/services/bookings-api.service';
import { BookingsType } from 'src/app/types';

@Component({
  selector: 'app-old-bookings',
  templateUrl: './old-bookings.page.html',
  styleUrls: ['./old-bookings.page.scss'],
})
export class OldBookingsPage implements OnInit {
  currentBookingsContent: BookingsType[] = [];

  constructor(private bookingsApiService: BookingsApiService) {
    this.bookingsApiService
      .getAllBookingsAsync()
      .then((bookingsPromise) =>
        bookingsPromise.subscribe(
          (_bookings) => (this.currentBookingsContent = _bookings)
        )
      );
  }

  ngOnInit() {}
}
