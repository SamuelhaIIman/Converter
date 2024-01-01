import { Component, Input, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormGroup, FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ConversionEngineService } from '../../shared/conversion-engine.service';
import { ConversionDef } from '../../shared/conversion-def.class';

@Component({
  selector: 'app-conversion-output',
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
  templateUrl: './conversion-output.component.html',
  styleUrl: './conversion-output.component.css'
})
export class ConversionOutputComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  conversionOutUinText = "Output";

  constructor(private conversionEngineService: ConversionEngineService) {}

  ngOnInit(): void {
    this.parentForm.get('conversionInput')?.valueChanges.subscribe((value) => {
      if(value === null || value === "") {
        this.parentForm.controls['conversionOutput'].setValue("");
        return;
      }

      let catName = this.parentForm.get('categoryValue')?.value;
      let convName = this.parentForm.get('converterValue')?.value;

      if(value !== "" && convName !== "") {
        let outValue = this.conversionEngineService.convertValue(catName, convName, value);
        this.parentForm.controls['conversionOutput'].setValue(outValue);
      } else {
        this.parentForm.controls['conversionOutput'].setValue("");
      }
    })
  }
}
