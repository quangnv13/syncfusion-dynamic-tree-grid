import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestTaskRoutingModule } from './test-task-routing.module';
import { TestTaskComponent } from './test-task.component';
import { EditService, PageService, ToolbarService, TreeGridModule } from '@syncfusion/ej2-angular-treegrid';



@NgModule({
  declarations: [TestTaskComponent],
  imports: [CommonModule, TestTaskRoutingModule, TreeGridModule],
  providers: [PageService, EditService, ToolbarService],
})
export class TestTaskModule { }
