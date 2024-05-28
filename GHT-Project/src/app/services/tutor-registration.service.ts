import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TutorDetails } from '../models/tutor-details.model';
import { PersonalDetails } from '../models/personal-details.model';
@Injectable({
  providedIn: 'root'
})
export class TutorRegistrationService {
  private apiUrl = 'http://localhost:5555/api/tutors/register';

  constructor(private http: HttpClient) {}

  registerTutor(personalDetails: PersonalDetails, tutorFormData: FormData): Observable<any> {
    tutorFormData.append('name', personalDetails.name);
    tutorFormData.append('surname', personalDetails.surname);
    tutorFormData.append('gender', personalDetails.gender);
    tutorFormData.append('dob', personalDetails.dob);
    tutorFormData.append('city', personalDetails.city);
    tutorFormData.append('mobileNo', personalDetails.mobileNo);
    tutorFormData.append('email', personalDetails.email);
    tutorFormData.append('password', personalDetails.password);

    return this.http.post<any>(this.apiUrl, tutorFormData);
  }
}
