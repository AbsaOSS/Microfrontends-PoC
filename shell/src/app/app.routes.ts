import { Routes } from '@angular/router';
import { Microfrontend } from './core/types/microfrontend.types';
import { environment } from 'src/environments/environment';
import { AuthGuard } from '@auth0/auth0-angular';

export const APP_ROUTES: Routes = [];

export const INITIAL_MICROFRONTEND_ROUTES: Microfrontend[] = [
  {
    type: 'module',
    ...environment.microfrontends.authApp,
    exposedModule: environment.microfrontends.authApp.exposedModule[0],

    // For Routing, enabling us to ngFor over the microfrontends and dynamically create links for the routes
    displayName: 'Register',
    routePath: 'login',
    ngModuleName: 'RegisterPageModule',
  },
];

export const AUTHORIZED_MICROFRONTEND_ROUTES: Microfrontend[] = [
  {
    type: 'module',
    ...environment.microfrontends.chartsApp,
    exposedModule: environment.microfrontends.chartsApp.exposedModule[0],

    displayName: 'Charts',
    routePath: 'charts',
    ngModuleName: 'ChartsModule',
    canActivate: [AuthGuard],
  },
  {
    type: 'module',
    ...environment.microfrontends.tableApp,
    exposedModule: environment.microfrontends.tableApp.exposedModule[0],

    displayName: 'Table',
    routePath: 'table',
    ngModuleName: 'TableModule',
    canActivate: [AuthGuard],
  },
  {
    type: 'module',
    ...environment.microfrontends.dashboardApp,
    exposedModule: environment.microfrontends.dashboardApp.exposedModule[0],

    displayName: 'Dashboard',
    routePath: 'dashboard',
    ngModuleName: 'DashboardModule',
    canActivate: [AuthGuard],
  },
];
