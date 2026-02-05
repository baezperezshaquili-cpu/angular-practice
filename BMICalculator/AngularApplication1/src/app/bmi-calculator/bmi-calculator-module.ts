import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmiCalculator } from '../components/bmi-calculator/bmi-calculator';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule, BmiCalculator
  ],
})
export class BmiCalculatorModule { }
