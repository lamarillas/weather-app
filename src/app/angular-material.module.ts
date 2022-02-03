import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatCardModule
  ]
})
export class AngularMaterialModule { }
