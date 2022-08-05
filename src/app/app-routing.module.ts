import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./modules/errors/errors.module').then((m) => m.ErrorModule),
  },
  {
    path: 'task',
    loadChildren: () =>
      import('./modules/test-task/test-task.module').then(
        (m) => m.TestTaskModule
      ),
  },
  { path: '**', redirectTo: 'error/error-authorized' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, SharedModule]
})
export class AppRoutingModule { }
