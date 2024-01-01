import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CategoryComponent } from './converter-ui/category/category.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ConverterComponent } from "./converter-ui/converter/converter.component";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ToolbarComponent,
    CategoryComponent,
    MatGridListModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ConverterComponent,
    ReactiveFormsModule,
  ],
})
export class AppModule { }
