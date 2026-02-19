import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Patient{
  ID?: number;
  patientName: string;
  dateCreated?: string;
  reasonOfVisit: string;
}

@Injectable({
  providedIn: 'root',
})
export class PatientListService {
  private Url = "http://localhost:5290/api/patient";

  constructor (private http:HttpClient){}

  getPatients():Observable<Patient[]>{
    return this.http.get<Patient[]>(this.Url);
  }

  addPatient(patient: Patient):Observable<Patient>{
    return this.http.post<Patient>(this.Url, patient);
  }
}
