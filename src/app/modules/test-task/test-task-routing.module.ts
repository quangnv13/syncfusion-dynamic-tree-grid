import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDemoComponent } from './task-demo/task-demo.component';
import { TaskComponent } from './task/task.component';
import { TestTaskComponent } from './test-task.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full',
  },
  {
    path: 'demo',
    component: TaskDemoComponent,
  },
  {
    path: 'test',
    component: TaskComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestTaskRoutingModule {}
