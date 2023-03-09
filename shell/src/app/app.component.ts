import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  $eventBus: Subscription | undefined;
  user$ = this.auth.user$;

  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.user$.subscribe((val) => {
      if (val) {
        if (this.router.url === '/login') this.router.navigate(['/auth']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnDestroy(): void {
    this.$eventBus?.unsubscribe();
  }
}
