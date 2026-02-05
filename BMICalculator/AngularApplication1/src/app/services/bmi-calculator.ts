import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BmiCalculatorService {
  private appUrl = 'http://localhost:4200/bmi-calculator';

  constructor (private http:HttpClient) {}

  getBMIData(): Observable<any> {
    return this.http.get<any>(this.appUrl);
  }
}
