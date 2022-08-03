import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidateComponent } from './components/validate/validate.component';

@NgModule({
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  declarations: [ValidateComponent],
  exports: [FormsModule, ReactiveFormsModule, ValidateComponent],
})
export class SharedModule {}
