import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INITIAL_MICROFRONTEND_ROUTES } from './app.routes';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/components/authenticated/authenticated.module').then(
        (m) => {
          return m.AuthenticatedModule;
        }
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    title: INITIAL_MICROFRONTEND_ROUTES[0].displayName,
    loadChildren: () => {
      return loadRemoteModule(INITIAL_MICROFRONTEND_ROUTES[0])
        .then((m) => {
          return m[INITIAL_MICROFRONTEND_ROUTES[0].ngModuleName];
        })
        .catch((error) => {
          console.error('error loading: ' + error);
        });
    },
    canActivate: INITIAL_MICROFRONTEND_ROUTES[0].canActivate,
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
