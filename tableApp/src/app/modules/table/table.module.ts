import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { DemoTableComponent } from './components/demo-table/demo-table.component';
import { MatTableModule } from '@angular/material/table';
import { TableRoutingModule } from './table-routing.module';

@NgModule({
  declarations: [DemoTableComponent, TablePageComponent],
  imports: [CommonModule, TableRoutingModule, MatTableModule],
  exports: [DemoTableComponent],
})
export class TableModule {}
