import { Routes } from '@angular/router';
import { PatientList } from './patient-list/patient-list';

export const routes: Routes = [
    {path: '', redirectTo: 'PatientList', pathMatch:'full'},
    {path: 'patient-list', component: PatientList},
];
