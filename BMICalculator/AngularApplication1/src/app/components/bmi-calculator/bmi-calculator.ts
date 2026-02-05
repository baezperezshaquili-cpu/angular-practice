import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi-calculator',
  imports: [RouterModule, FormsModule],
  templateUrl: './bmi-calculator.html',
  styleUrl: './bmi-calculator.css',
})


export class BmiCalculator {
  constructor (private http:HttpClient){}
  heightft: number = 0;
  heightin: number = 0;
  weight: number = 0;
  calculatedBMI: number | null = null;
  bmiClass: string = '';
  textColor: string = '';

  calculateBMI(){
    const height = this.heightft * 12 + this.heightin;
    this.calculatedBMI = +(703 * this.weight / (height * height)).toFixed(2);

    switch (true)
    {
      case this.calculatedBMI < 16:
        this.bmiClass = 'Severely Thin';
        this.textColor = 'red';
        break;
      case this.calculatedBMI < 17:
        this.bmiClass = 'Thin';
        this.textColor = 'purple';
        break;
      case this.calculatedBMI < 18.5:
        this.bmiClass = 'Underweight';
        this.textColor = 'blue';
        break;
      case this.calculatedBMI <= 25:
        this.bmiClass = 'Normal';
        this.textColor = 'green';
        break;
      case this.calculatedBMI < 30:
        this.bmiClass = 'Overweight';
        this.textColor = 'gold';
        break;
      case this.calculatedBMI < 35:
        this.bmiClass = 'Obese';
        this.textColor = 'orange';
        break;
      default:
        this.bmiClass = 'Severely Obese';
        this.textColor = 'red';
    }
  }
}

