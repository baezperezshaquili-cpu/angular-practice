import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PatientListService, Patient } from '../services/patient-list';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-list',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './patient-list.html',
  styleUrl: './patient-list.css',
})
export class PatientList implements OnInit {
  patients: Patient[] = [];
  newPatient: Patient = {name: "", reasonOfVisit: ""};
  showData = false;


  listOfReasons: string[] = [
    "Medical emergency (Choking, heart attack, severe injury, etc.)",
    "Digestive issues (Vomiting, diarrhea, swallowing issues, etc.)",
    "Respiratory issues (Excessive coughing, wheezing, excessive mucus, etc.)",
    "Cognitive issues (Lack of concentration, memory loss, lack of judgement, etc.)",
    "Emotional issues (Anxiety, depression, mood swings, etc.)",
    "Vision issues (Sudden flashes, dry eyes, sudden loss of vision, etc.)",
    "Post-surgery issues (Non-stop bleeding, infection, swelling, etc.)",
    "General issues (High fever, irregular menstruation, back pain, etc.)"
  ];

  selectedReason: string = "";

  constructor (private patientListService: PatientListService, private cdf: ChangeDetectorRef){}

  ngOnInit(): void {
    this.patientListService.getPatients().subscribe(data => {
      this.patients = data;
      this.showData = true;
      this.cdf.detectChanges();
    });
  }

  addPatient(): void {
    this.patientListService.addPatient(this.newPatient).subscribe(patient => {
      this.patients.push(patient);
      this.newPatient = {name: "", reasonOfVisit: ""};
    })
  }
}
