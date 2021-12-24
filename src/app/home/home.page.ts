import { Component } from '@angular/core';
import { Filters } from '../constants';
import { GlobalStatesService } from '../services/global-states.service';
import { UiServiceService } from '../services/ui-service.service';
import { FilterType } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  filters = Filters;
  activeFilter: FilterType;

  constructor(
    private globalStatesService: GlobalStatesService,
    private uiService: UiServiceService
  ) {
    this.globalStatesService
      .getCurrentActiveFilter()
      .subscribe((_activeFilter) => (this.activeFilter = _activeFilter));
    this.uiService
      .onFilterChange()
      .subscribe((_newFilter) => (this.activeFilter = _newFilter));
  }

  onClickFilter(filter: FilterType) {
    this.globalStatesService.setCurrentActiveFilter(filter);
    this.uiService.setActiveFilter(filter);
  }
}
