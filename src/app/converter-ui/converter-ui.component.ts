import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CategoryComponent } from "./category/category.component";
import { ConverterComponent } from "./converter/converter.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from '@angular/common';
import { ConversionEngineService } from '../shared/conversion-engine.service';
import { ConversionInputComponent } from "./conversion-input/conversion-input.component";
import { ConversionOutputComponent } from "./conversion-output/conversion-output.component";

@Component({
  selector: 'app-converter-ui',
  standalone: true,
  imports: [
    MatGridListModule, 
    CategoryComponent,
    ConverterComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    ConversionInputComponent,
    ConversionOutputComponent
  ],
  templateUrl: './converter-ui.component.html',
  styleUrl: './converter-ui.component.css'
})
export class ConverterUiComponent implements OnInit {
  parentForm!: FormGroup;

  constructor(private fb: FormBuilder, private conversionEngineService: ConversionEngineService) {}


  ngOnInit(): void {
    let converterCategoryDefs = this.conversionEngineService.getConverterCategoryDefs();
    
      this.parentForm = this.fb.group({
        categoryValue: new FormControl(converterCategoryDefs[0].name),
        converterValue: new FormControl(converterCategoryDefs[0].conversions[0].name),
        conversionInput: new FormControl(),
        conversionOutput: new FormControl(),
      });
  }

  onSubmit() {
    console.log(`Submit: ${JSON.stringify(this.parentForm.value)}`);
  }

}
