import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookingsType } from '../types';

@Injectable({
  providedIn: 'root',
})
export class BookingsApiService {
  constructor() {}

  async getAllBookingsAsync(): Promise<Observable<BookingsType[]>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(of(demo));
      }, 2000);
    });
  }
}

const demo: BookingsType[] = [
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
