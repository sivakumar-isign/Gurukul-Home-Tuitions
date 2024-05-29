import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TutorDetails } from '../models/tutor-details.model';
@Injectable({
  providedIn: 'root'
})
export class TutorRegistrationService {
  private apiUrl = 'http://localhost:5555/api/tutors'; // Your backend API URL
//   constructor(private http: HttpClient) { }
// registerTutor(tutorDetails: TutorDetails): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/register`, tutorDetails);
// }

private form1Data: any = {};
private form2Data: any = {};

constructor(private http: HttpClient) {}

setForm1Data(data: any) {
  this.form1Data = data;
}

setForm2Data(data: any) {
  this.form2Data = data;
  console.log('Form 2 data:', this.form2Data);
}

submitData(): Observable<any> {
  const mergedData = { ...this.form1Data, ...this.form2Data };
  console.log('Merged data:', mergedData);
  return this.http.post('http://localhost:5555/api/tutors/register', mergedData);
}


}
