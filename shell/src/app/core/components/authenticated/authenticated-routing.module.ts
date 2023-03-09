import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTHORIZED_MICROFRONTEND_ROUTES } from 'src/app/app.routes';
import { buildRoutes } from 'src/app/utils/route-utils';
import { AuthenticatedComponent } from './authenticated.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticatedComponent,
    children: buildRoutes(AUTHORIZED_MICROFRONTEND_ROUTES),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticatedRoutingModule {}
