import { Component, Input, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  $eventBus?: Subscription;
  receivedMessage = '';

  constructor() {}

  onEventHandler(e: CustomEvent) {
    if (e.detail.eventType === 'table-message') {
      if (e.detail.recipient === 'shell')
        this.receivedMessage = e.detail.data || '';
    }
  }

  ngOnInit() {
    this.$eventBus = fromEvent<CustomEvent>(window, 'app-event-bus').subscribe(
      (e) => this.onEventHandler(e)
    );
  }

  ngOnDestroy() {
    this.$eventBus?.unsubscribe();
  }
}
