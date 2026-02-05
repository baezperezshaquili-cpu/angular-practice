import { Routes } from '@angular/router';
import { BmiCalculator } from './components/bmi-calculator/bmi-calculator';

export const routes: Routes = [
    {path: '', redirectTo: 'BmiCalculator', pathMatch:'full'},
    {path: 'bmi-calculator', component: BmiCalculator},
];
