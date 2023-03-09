import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() text = "I'm the footer from remote layout module";
  @Input() color = 'blue';

  constructor() {}

  ngOnInit(): void {}
}
