import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateBookComponent } from '../components/createbook/createbook.component';

@NgModule({
  declarations: [CreateBookComponent], 
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [CreateBookComponent]
})
export class CreateBookModule { }
