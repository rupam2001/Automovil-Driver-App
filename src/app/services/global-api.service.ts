import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalApiService {
  constructor() {}

  async getCarMakesListAsync(): Promise<string[]> {
    return demoCarMakes;
  }
  async getCarModelsAsync(carMake: string): Promise<string[]> {
    return demoCarModels[carMake];
  }
  async getCarTypesAsync(): Promise<string[]> {
    return ['SUV', 'MPV', 'Crossover', 'Sedan'];
  }
}

const demoCarMakes = [
  'Maruti Suzuki',
  'Toyota',
  'Ford',
  'Hyundai',
  'Honda',
  'TATA',
];
const demoCarModels = {
  Toyota: ['Avalon', 'Camry', 'Sienna', 'Innova Crysta'],
  'Maruti Suzuki': ['800', 'Alto', 'Wagnor'],
  Ford: ['Eco sport', 'Figo', 'Aspire'],
  Hyundai: ['Eon', 'i10', 'i20', 'Creta'],
  Honda: ['City', 'Amaze'],
  TATA: ['nano', 'indica', 'indigo', 'Safari', 'Tiago NRG'],
};
