import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {
  constructor() {}

  imageText: string = '*open camera to click photo';
  btnText = 'CAMERA';

  @Input() title = '';

  @Output() onImageCaptured: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}

  async onClickCameraAsync() {
    const { filePath } = await this.takePicture();
    this.onImageCaptured.emit({ filePath, fix: this.title });
    this.btnText = 'RETAKE';
  }

  async takePicture(): Promise<{ filePath: string }> {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      saveToGallery: true,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var image64 = image.base64String;
    var imagePath = image.path;
    const len = imagePath.split('/').length;
    this.imageText = imagePath.split('/')[len - 1];
    return { filePath: imagePath };
  }
}
