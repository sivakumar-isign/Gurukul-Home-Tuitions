import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorParkComponent } from './tutor-park/tutor-park.component';
import { TutorComponent } from './tutor-park/tutor/tutor.component';
import { TutorRegistrationComponent } from './tutor-park/tutor/tutor-registration/tutor-registration.component';
import { TutorDashboardComponent } from './tutor-park/tutor/tutor-dashboard/tutor-dashboard.component';
import { StudentComponent } from './tutor-park/student/student.component';
import { StudentRegistrationComponent } from './tutor-park/student/student-registration/student-registration.component';
import { StudentDashboardComponent } from './tutor-park/student/student-dashboard/student-dashboard.component';
import { PersonalRegistrationComponent } from './tutor-park/personal-registration/personal-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GurukulHomeComponent } from './gurukul-home/gurukul-home.component';
import { CallToActionComponent } from './gurukul-home/call-to-action/call-to-action.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorParkComponent,
    TutorComponent,
    TutorRegistrationComponent,
    TutorDashboardComponent,
    StudentComponent,
    StudentRegistrationComponent,
    StudentDashboardComponent,
    PersonalRegistrationComponent,
    GurukulHomeComponent,
    CallToActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
