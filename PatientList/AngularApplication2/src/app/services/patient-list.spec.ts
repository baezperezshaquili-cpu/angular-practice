import { TestBed } from '@angular/core/testing';
import { PatientList } from '../patient-list/patient-list';

describe('PatientList', () => {
  let service: PatientList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
