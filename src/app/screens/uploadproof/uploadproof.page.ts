import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadproof',
  templateUrl: './uploadproof.page.html',
  styleUrls: ['./uploadproof.page.scss'],
})
export class UploadproofPage implements OnInit {
  fixesList: string[] = ['Fix 1', 'Fix 2', 'Fix 3', 'Fix 4'];

  constructor() {}

  ngOnInit() {}
}
