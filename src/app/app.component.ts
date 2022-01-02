import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) {
    // router.navigateByUrl('uploadproof'); //@testing
    this.notificationService.initializePushNotification();
  }
}
