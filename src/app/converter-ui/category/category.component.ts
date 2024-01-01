import { Component, Input, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormGroup, FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ConverterCategoryDef } from '../../shared/converter-category-def.class';
import { ConversionEngineService } from '../../shared/conversion-engine.service';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    MatGridListModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule, 
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  converterCategoryDefs!: ConverterCategoryDef[];

  constructor(private conversionEngineService: ConversionEngineService) {}

  ngOnInit(): void {
    this.converterCategoryDefs = this.conversionEngineService.getConverterCategoryDefs();

    this.parentForm.get("categoryValue")?.valueChanges.subscribe((value) => {
      console.log(`Category changed: ${value}`);
    });
  }
}