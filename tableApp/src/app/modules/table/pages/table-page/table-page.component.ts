import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss'],
})
export class TablePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sendMessage(name: string) {
    dispatchEvent(
      new CustomEvent('app-event-bus', {
        bubbles: true,
        detail: {
          eventType: 'table-message',
          data: 'Hello from table!',
          recipient: name,
        },
      })
    );
  }
}
