import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { RoseComponent } from './components/rose/rose.component';
import { PolarComponent } from './components/polar/polar.component';

@NgModule({
  declarations: [ChartsComponent],
  imports: [CommonModule, ChartsRoutingModule, RoseComponent, PolarComponent],
})
export class ChartsModule {}
