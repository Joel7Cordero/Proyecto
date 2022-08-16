import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactReactiveRoutingModule } from './contact-reactive-routing.module';
import { ContactReactiveComponent } from './contact-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ContactReactiveComponent],
  imports: [
    CommonModule,
    ContactReactiveRoutingModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class ContactReactiveModule { }
