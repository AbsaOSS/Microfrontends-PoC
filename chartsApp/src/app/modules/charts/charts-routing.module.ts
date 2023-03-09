import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  { path: '', component: ChartsComponent },
  {
    title: 'Rose',
    path: 'rose',
    loadComponent: () =>
      import('./components/rose/rose.component').then(
        (mod) => mod.RoseComponent
      ),
  },
  {
    title: 'Polar',
    path: 'polar',
    loadComponent: () =>
      import('./components/polar/polar.component').then(
        (mod) => mod.PolarComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
