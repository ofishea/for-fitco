import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  categories:any = 'new';

  constructor() { }

  ngOnInit() {
  }
  segmentChanged(ev: Event) {
    const customEvent = ev as CustomEvent;
    this.categories = customEvent.detail.value;
  }

}
