import { Component } from '@angular/core';
import { ExtLocalNotifications } from 'ext-ionic';

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
      progress: true,
      maxProgress: 100,
      currentProgress: 0
    });
  }

  update() {
    this.localNotifications.update({
      id: 1000,
      title: '正在下载...',
      progress: true,
      maxProgress: 100,
      currentProgress: 100
    });
  }

  end() {
    this.localNotifications.clear(1000);
  }
}
