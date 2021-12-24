import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: User = {
    name: 'John Doe',
    profile_pic_url:
      'https://cdn-images-1.medium.com/max/1200/1*NpUUls7kjn9JhO4ChjGV7w.png',
  };

  isLocationChecked: boolean = false;
  isActiveChecked: boolean = false;

  constructor() {}

  ngOnInit() {}

  onToggleLocation() {
    // this.isLocationChecked = !this.isLocationChecked;
  }
  onToggleActive() {}
}
