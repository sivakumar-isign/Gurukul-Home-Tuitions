import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PersonalDetails } from '../models/personal-details.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  
  constructor(private http: HttpClient) {}

  private personalDetailsSource = new BehaviorSubject<PersonalDetails>(null);
  personalDetails$ = this.personalDetailsSource.asObservable();

  setPersonalDetails(details: PersonalDetails) {
    this.personalDetailsSource.next(details);
    console.log(details.mobileNo);
  }
}
