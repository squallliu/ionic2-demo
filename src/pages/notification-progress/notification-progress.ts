import { Component } from '@angular/core';
import { ExtLocalNotifications } from 'ext-ionic';

@Component({
  selector: 'page-notification-progress',
  templateUrl: 'notification-progress.html'
})
export class NotificationProgressPage {
  constructor() { }

  show() {
    ExtLocalNotifications.schedule({
      id: 1000,
      title: '正在下载...',
      progress: true,
      maxProgress: 100,
      currentProgress: 0
    });
  }

  update() {
    ExtLocalNotifications.update({
      id: 1000,
      title: '正在下载...',
      progress: true,
      maxProgress: 100,
      currentProgress: 100
    });
  }

  end() {
    ExtLocalNotifications.clear(1000);
  }
}
