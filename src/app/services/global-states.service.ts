import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Filters } from '../constants';
import { FilterType } from '../types';

@Injectable({
  providedIn: 'root',
})
export class GlobalStatesService {
  private currentActiveFilter = Filters[1];

  constructor() {}

  getCurrentActiveFilter(): Observable<FilterType> {
    return of(this.currentActiveFilter);
  }
  setCurrentActiveFilter(filter: FilterType) {
    this.currentActiveFilter = filter;
  }
}
