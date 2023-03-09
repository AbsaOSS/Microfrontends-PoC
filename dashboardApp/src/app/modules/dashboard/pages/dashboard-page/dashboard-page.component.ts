import {
  AfterViewInit,
  Component,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements AfterViewInit, OnInit {
  @ViewChild('tableContainer', { read: ViewContainerRef, static: true })
  tableContainer!: ViewContainerRef;
  tableLoadError = '';

  constructor(private injector: Injector) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // load table
    loadRemoteModule({
      type: 'module',
      ...environment.microfrontends.tableApp,
      exposedModule: environment.microfrontends.tableApp.exposedModule[1],
    })
      .then((module) => {
        this.tableContainer?.createComponent(module.DemoTableComponent, {
          index: undefined,
          injector: this.injector,
        });
      })
      .catch((error) => {
        this.tableLoadError = 'The table is currently unavailable.';
        console.error('error loading: ' + error);
      });
  }
}
