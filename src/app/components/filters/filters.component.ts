import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filters } from 'src/app/constants';
import { GlobalStatesService } from 'src/app/services/global-states.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { BookingsType, FilterType } from 'src/app/types';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  filters = Filters;
  activeFilter: FilterType;
  currentBookingsContent: BookingsType[] = [];
  disabledFilter: FilterType = { title: 'Current' }; //by default
  constructor(
    private globalStatesService: GlobalStatesService,
    private uiService: UiServiceService,
    private router: Router
  ) {
    this.globalStatesService
      .getCurrentActiveFilter()
      .subscribe((_activeFilter) => {
        this.activeFilter = _activeFilter;
      });
    this.uiService.onFilterChange().subscribe((_newFilter) => {
      this.activeFilter = _newFilter;
      // navigate to Current page or Home accordingly
      if (_newFilter.title == 'Current') {
        // navigate to Current page
        this.router.navigateByUrl('/home/current-booking', { state: {} });
      } else {
        // navigate to Home page
        this.router.navigateByUrl('home');
      }
    });
    this.uiService
      .onDisabledFilterChange()
      .subscribe((_filter) => (this.disabledFilter = _filter));
  }
  ngOnInit() {}
  onClickFilter(filter: FilterType) {
    this.globalStatesService.setCurrentActiveFilter(filter);
    this.uiService.setActiveFilter(filter);
    if (filter.title == 'Custom') this.pickCustomDate();
  }

  pickCustomDate() {}
}
