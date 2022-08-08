import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestTaskRoutingModule } from './test-task-routing.module';
import { TestTaskComponent } from './test-task.component';
import {
  EditService,
  InfiniteScrollService,
  PageService,
  ToolbarService,
  RowDDService,
  TreeGridModule,
  SortService,
  ResizeService,
  ExcelExportService,
  PdfExportService,
  ContextMenuService,
  ReorderService,
  ColumnMenuService,
  VirtualScrollService,
} from '@syncfusion/ej2-angular-treegrid';

import { FilterService } from '@syncfusion/ej2-angular-treegrid';
import { TaskComponent } from './task/task.component';
import { TaskDemoComponent } from './task-demo/task-demo.component';
import { NgxLoadingModule } from 'ngx-loading';

const syncfusionService = [
  FilterService,
  SortService,
  ResizeService,
  ExcelExportService,
  ContextMenuService,
  PdfExportService,
  RowDDService,
  PageService,
  EditService,
  ToolbarService,
  InfiniteScrollService,
  ReorderService,
  ColumnMenuService,
  VirtualScrollService,
];

@NgModule({
  declarations: [TestTaskComponent, TaskComponent, TaskDemoComponent],
  imports: [
    CommonModule,
    TestTaskRoutingModule,
    TreeGridModule,
    NgxLoadingModule,
  ],
  providers: [...syncfusionService],
})
export class TestTaskModule {}
