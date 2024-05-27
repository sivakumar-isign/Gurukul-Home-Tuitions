import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TutorDetails } from '../models/tutor-details.model';
@Injectable({
  providedIn: 'root'
})
export class TutorRegistrationService {
  private apiUrl = 'http://localhost:5555/api/tutors'; // Your backend API URL
  constructor(private http: HttpClient) { }
registerTutor(tutorDetails: TutorDetails): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, tutorDetails);
}
}
