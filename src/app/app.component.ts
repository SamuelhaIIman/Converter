import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {ToolbarComponent} from './toolbar/toolbar.component';
import { ConverterUiComponent } from "./converter-ui/converter-ui.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ToolbarComponent,
    ConverterUiComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unit-conversion-app';
}
