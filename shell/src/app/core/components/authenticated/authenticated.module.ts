import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { AuthenticatedComponent } from './authenticated.component';
@NgModule({
  declarations: [AuthenticatedComponent, NavbarComponent, LoaderComponent],
  imports: [CommonModule, AuthenticatedRoutingModule],
  providers: [],
})
export class AuthenticatedModule {}
