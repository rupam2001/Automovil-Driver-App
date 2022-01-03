import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadproof',
  templateUrl: './uploadproof.page.html',
  styleUrls: ['./uploadproof.page.scss'],
})
export class UploadproofPage implements OnInit {
  fixesList: string[] = ['Fix 1', 'Fix 2', 'Fix 3'];
  capturedFixesImages = {};

  areAllCaptured: boolean = false;
  isUploading: boolean = false;

  constructor(private router: Router) {
    for (const key of this.fixesList) {
      this.capturedFixesImages[key] = { filePath: '', isCaptured: false };
    }
  }

  ngOnInit() {}

  onImageCaptured(image: { filePath: string; fix: string }) {
    this.capturedFixesImages[image.fix] = {
      filePath: image.filePath,
      isCaptured: true,
    };
    this.areAllCaptured = this.checkIfAllAreCaptured();
  }
  checkIfAllAreCaptured(): boolean {
    for (const key in this.capturedFixesImages) {
      if (this.capturedFixesImages[key].isCaptured == false) {
        return false;
      }
    }
    return true;
  }
  async onClickUploadAsync() {
    if (!this.areAllCaptured) return;
    this.isUploading = true;
    setTimeout(() => {
      //api call to upload all  @pending...
      this.isUploading = false;
      //navigate back
      this.router.navigate(['..']);
    }, 4000);
  }
}
