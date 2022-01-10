import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  numPhotos: number[] = [0];
  photos: string[] = []; // contains array of file paths

  carMake: string = '';
  carModel: string = '';
  carType: string = '';
  mileage: number = -1;
  run: number = -1;

  constructor(
    private globalApiService: GlobalApiService,
    private router: Router
  ) {
    this.globalApiService
      .getCarMakesListAsync()
      .then((cm) => (this.carMakeList = cm));
    this.globalApiService
      .getCarTypesAsync()
      .then((types) => (this.carTypesList = types));
  }

  onImageClick({ filePath, id }) {
    this.photos[id] = filePath;
    this.numPhotos.push(this.numPhotos.length);
    this.checkForUploadBtnUnablity();
  }
  onSelectMakeList(_carMake) {
    this.carMake = _carMake;
    this.globalApiService.getCarModelsAsync(_carMake).then((models) => {
      this.carModelsList = models;
    });
    this.checkForUploadBtnUnablity();
  }
  onSelectCarModel(_carModel) {
    this.carModel = _carModel;
    this.checkForUploadBtnUnablity();
  }
  onSelectCarType(_carType) {
    this.carType = _carType;
    this.checkForUploadBtnUnablity();
  }
  onChangeMileage(_mileage) {
    this.mileage = _mileage;
    this.checkForUploadBtnUnablity();
  }
  onChangeRun(_run) {
    this.run = _run;
    this.checkForUploadBtnUnablity();
  }

  checkForUploadBtnUnablity() {
    if (
      this.carMake != '' &&
      this.carModel != '' &&
      this.carType != '' &&
      this.mileage != -1 &&
      this.run != -1 &&
      this.photos.length >= 1
    ) {
      this.unableUpload = true;
    }
  }
  onClickUpload() {
    if (!this.unableUpload) return;
    this.router.navigateByUrl('/home/current-booking');
  }

  ngOnInit() {}
}
