import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FilterType, TaskType } from '../types';
import { GlobalStatesService } from './global-states.service';
import { StorageKeys, StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class UiServiceService {
  private activeFilter: FilterType;
  private activeFilterSubject = new Subject<FilterType>();

  private disabledFilter: FilterType;
  private disabledFilterSubject = new Subject<FilterType>();

  private currentRequestData: TaskType = null;
  private currentRequestDataSubject = new Subject<TaskType>();

  constructor(
    private globalStateService: GlobalStatesService,
    private storageService: StorageService
  ) {
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

  setDisabledFilter(filter: FilterType): void {
    this.disabledFilter = filter;
    this.disabledFilterSubject.next(this.disabledFilter);
  }
  onDisabledFilterChange(): Observable<FilterType> {
    return this.disabledFilterSubject.asObservable();
  }

  setCurrentRequestData(data: TaskType) {
    this.currentRequestData = data;
    this.currentRequestDataSubject.next(this.currentRequestData);
  }
  onCurrentRequestChange(): Observable<TaskType> {
    return this.currentRequestDataSubject.asObservable();
  }

  checkForPendingNotification(): void {
    this.storageService.get(StorageKeys.NotificationDataKey).then((value) => {
      if (!value) return;
      const data = JSON.parse(value);
      //check for time >>> pending
      this.setCurrentRequestData(data.data);
    });
  }
}
