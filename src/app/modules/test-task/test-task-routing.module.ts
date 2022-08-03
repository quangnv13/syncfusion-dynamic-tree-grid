import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestTaskComponent } from './test-task.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full',
  },
  {
    path: 'test',
    component: TestTaskComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class TestTaskRoutingModule {}
