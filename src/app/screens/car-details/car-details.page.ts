import { Component, OnInit } from '@angular/core';
import { GlobalApiService } from 'src/app/services/global-api.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {
  carMakeList: string[] = [];
  carModelsList: string[] = [];
  carTypesList: string[] = [];

  unableUpload: boolean = false;

  constructor(private globalApiService: GlobalApiService) {
    this.globalApiService
      .getCarMakesListAsync()
      .then((cm) => (this.carMakeList = cm));
    this.globalApiService
      .getCarTypesAsync()
      .then((types) => (this.carTypesList = types));
  }

  ngOnInit() {}
}
