import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  $eventBus?: Subscription;
  user$ = this.auth.user$;
  receivedMessage = '';

  constructor(private auth: AuthService) {}

  onEventHandler(e: CustomEvent) {
    if (e.detail.eventType === 'table-message') {
      if (e.detail.recipient === 'layout')
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

  logout() {
    this.auth.logout();
  }
}
