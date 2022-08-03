import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '404-error', pathMatch: 'full' },
      {
        path: 'error-authorized',
        component: NotFoundComponent
      },
      {
        path: '**',
        component: NotFoundComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule {}
