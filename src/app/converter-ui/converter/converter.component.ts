import { Component, Input, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormGroup, FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ConversionDef } from '../../shared/conversion-def.class';
import { ConversionEngineService } from '../../shared/conversion-engine.service';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [
    MatGridListModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule, 
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  
  conversionDefs!: ConversionDef[];

  constructor(private conversionEngineService: ConversionEngineService) {}

  ngOnInit(): void {
    let catName = this.parentForm.get('categoryValue')?.value;
    this.conversionDefs = this.conversionEngineService.getConversionDefs(catName);

      this.parentForm.get("categoryValue")?.valueChanges.subscribe((value) => {
        this.conversionDefs = this.conversionEngineService.getConversionDefs(value);
        console.log(`Category changed in the converter: ${value}`);
      });
  }
}
