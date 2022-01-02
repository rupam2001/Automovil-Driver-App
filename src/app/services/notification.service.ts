import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import { StorageKeys, StorageService } from './storage.service';
import { UiServiceService } from './ui-service.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(
    private router: Router,
    private storageService: StorageService,
    private uiService: UiServiceService
  ) {}

  initializePushNotification() {
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive == 'granted') {
        PushNotifications.register();
      } else {
        alert('Notification permision denied');
      }
    });
    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        //store it to Storage
        this.storageService.set(
          StorageKeys.NotificationDataKey,
          JSON.stringify({ time: Date.now(), data: notification.data })
        );
        // inform  UI service
        this.uiService.setCurrentRequestData(notification.data);
      }
    );
    // Method called when tapping on a notification
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        //save to storage
        this.storageService.set(
          StorageKeys.NotificationDataKey,
          JSON.stringify({
            time: Date.now(),
            data: notification.notification.data,
          })
        );
        //inform ui service
        setTimeout(() => {}, 3000);
        this.uiService.setCurrentRequestData(notification.notification.data);
      }
    );
    PushNotifications.addListener('registration', (token: Token) => {
      // alert('Push registration success, token: ' + token.value);
    });
  }
}
