import { FilterType } from './types';

export const Filters: FilterType[] = [
  { title: 'Current' },
  { title: 'All' },
  { title: 'Today' },
  { title: 'Yesterday' },
  { title: 'Custom' },
];

export const MODALS = {
  RequestModal: 'request-modal',
  RequestDetailsModal: 'request-details-modal',
  None: 'none',
};

export const TASKCATEGORY = {
  CtoG: 'Customer-to-Garage',
  GtoC: 'Garage-to-Customer',
  GtoG: 'Garage-to-Garage',
};
