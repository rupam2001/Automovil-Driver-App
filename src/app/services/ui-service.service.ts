import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FilterType } from '../types';
import { GlobalStatesService } from './global-states.service';

@Injectable({
  providedIn: 'root',
})
export class UiServiceService {
  private activeFilter: FilterType;
  private activeFilterSubject = new Subject<FilterType>();

  constructor(private globalStateService: GlobalStatesService) {
    this.globalStateService
      .getCurrentActiveFilter()
      .subscribe((_currentFilter) => {
        this.setActiveFilter(_currentFilter);
      });
  }

  setActiveFilter(filter: FilterType): void {
    this.activeFilter = filter;
    this.activeFilterSubject.next(this.activeFilter);
  }
  onFilterChange(): Observable<FilterType> {
    return this.activeFilterSubject.asObservable();
  }
}
