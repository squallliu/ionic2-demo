import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarPage implements OnInit {
  loadProgress: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    let me = this;
    var i = setInterval(function () {
      me.loadProgress++;
      if (me.loadProgress == 100)
        clearInterval(i);
    }, 10);
  }
}
