import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from './modules/charts/charts.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), ChartsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
