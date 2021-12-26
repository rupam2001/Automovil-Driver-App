import { Component } from '@angular/core';
import { Filters } from '../constants';
import { BookingsApiService } from '../services/bookings-api.service';
import { GlobalStatesService } from '../services/global-states.service';
import { UiServiceService } from '../services/ui-service.service';
import { BookingsType, FilterType, TaskType } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  filters = Filters;
  activeFilter: FilterType;
  currentBookingsContent: BookingsType[] = [];
  Task: TaskType = {
    customer_name: 'Rupam Jyoti Das',
    customer_phone_number: '8638047859',
    customer_location: 'Machorhat, Jorhat, 785001',
    garage_name: 'Lamborghini garage',
    garage_location: 'JEC road, Jorhat, 785007',
    garage_phone_number: '9876543210',
    timestamp: '4:00 pm',
    pickup_time: '5:30pm',
    id: '123',
  };
  hasRequest: boolean = true;

  constructor(
    private globalStatesService: GlobalStatesService,
    private uiService: UiServiceService,
    private bookingsApiService: BookingsApiService
  ) {
    this.globalStatesService
      .getCurrentActiveFilter()
      .subscribe((_activeFilter) => {
        this.activeFilter = _activeFilter;
      });
    this.uiService
      .onFilterChange()
      .subscribe((_newFilter) => (this.activeFilter = _newFilter));
    this.bookingsApiService
      .getAllBookingsAsync()
      .then((bookingsPromise) =>
        bookingsPromise.subscribe(
          (_bookings) => (this.currentBookingsContent = _bookings)
        )
      );
  }

  onClickFilter(filter: FilterType) {
    this.globalStatesService.setCurrentActiveFilter(filter);
    this.uiService.setActiveFilter(filter);
  }
}
