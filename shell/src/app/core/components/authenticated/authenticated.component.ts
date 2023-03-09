import {
  ViewContainerRef,
  Component,
  OnInit,
  AfterViewInit,
  Injector,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.scss'],
})
export class AuthenticatedComponent
  implements AfterViewInit, OnInit, OnDestroy
{
  @ViewChild('header', { read: ViewContainerRef, static: true })
  headerContainer!: ViewContainerRef;

  @ViewChild('footer', { read: ViewContainerRef, static: true })
  footerContainer!: ViewContainerRef;

  @ViewChild('footer1', { read: ViewContainerRef, static: true })
  footerContainer1!: ViewContainerRef;

  loadingRouteConfig = false;

  constructor(private injector: Injector, private router: Router) {}

  ngOnInit() {
    if (this.router.url === '/auth')
      this.router.navigateByUrl('/auth/dashboard');
    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loadingRouteConfig = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loadingRouteConfig = false;
      }
    });
  }

  ngAfterViewInit(): void {
    // load header
    loadRemoteModule({
      type: 'module',
      ...environment.microfrontends.layout,
      exposedModule: environment.microfrontends.layout.exposedModule[0],
    }).then((module) => {
      this.headerContainer?.createComponent(module.HeaderComponent, {
        index: undefined,
        injector: this.injector,
      });
    });
    // load footer
    loadRemoteModule({
      type: 'module',
      ...environment.microfrontends.layout,
      exposedModule: environment.microfrontends.layout.exposedModule[1],
    }).then((module) => {
      this._createComponentInstance(
        module,
        '#640032',
        "I'm the first instance of footer from remote layout module"
      );
      this._createComponentInstance(
        module,
        '#af144b',
        "I'm the second instance of footer from remote layout module"
      );
    });
  }

  ngOnDestroy(): void {}

  private _createComponentInstance(module: any, color: string, text: string) {
    const ref = this.footerContainer?.createComponent(module.FooterComponent, {
      index: undefined,
      injector: this.injector,
    });
    ref.setInput('text', text);
    ref.setInput('color', color);
  }
}
