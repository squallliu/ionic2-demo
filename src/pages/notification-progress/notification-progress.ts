import { Component } from '@angular/core';
import { ExtLocalNotifications } from 'ext-ionic';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notification-progress',
  templateUrl: 'notification-progress.html'
})
export class NotificationProgressPage {
  constructor(private localNotifications: ExtLocalNotifications) { }

  show() {
    this.localNotifications.schedule({
      id: 1000,
      title: '正在下载...',
      progressBar: { enabled: true, maxValue: 100, value: 0 }
    });
  }

  update() {
    this.localNotifications.update({
      id: 1000,
      title: '正在下载...',
      progressBar: { enabled: true, maxValue: 100, value: 100 }
    });
  }

  end() {
    this.localNotifications.clear(1000);
  }
}
