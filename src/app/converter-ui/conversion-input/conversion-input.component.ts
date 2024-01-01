import { Component, Input, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormGroup, FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ConversionEngineService } from '../../shared/conversion-engine.service';

@Component({
  selector: 'app-conversion-input',
  standalone: true,
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './conversion-input.component.html',
  styleUrl: './conversion-input.component.css'
})
export class ConversionInputComponent implements OnInit{
  @Input() parentForm!: FormGroup;
  
  conversionInUinText = "Input";

  constructor(private conversionEngineService: ConversionEngineService) {}

  ngOnInit(): void {
      this.parentForm.get('categoryValue')?.valueChanges.subscribe((value) => {
        this.conversionInUinText = "Input"; 
        this.parentForm.get('conversionInput')?.setValue("");
    })

    this.parentForm.get('converterValue')?.valueChanges.subscribe((value) => {
      let catName = this.parentForm.get('categoryValue')?.value;
      if(catName != "") {
        let conversionDef = this.conversionEngineService.getCurrentConversionDef(catName, value);
        this.conversionInUinText = "input as "+conversionDef!.inUint;
      }
    })
  }
}
