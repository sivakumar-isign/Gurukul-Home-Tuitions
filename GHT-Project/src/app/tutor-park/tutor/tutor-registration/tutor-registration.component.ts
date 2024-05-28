// tutor-registration.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PersonalDetails } from '../../../models/personal-details.model';
import { TutorDetails } from '../../../models/tutor-details.model';
import { TutorRegistrationService } from '../../../services/tutor-registration.service';
@Component({
  selector: 'app-tutor-registration',
  templateUrl: './tutor-registration.component.html',
  styleUrls: ['./tutor-registration.component.css']
})
export class TutorRegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private tutorRegistrationService: TutorRegistrationService) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      city: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]], // Changed to mobileNo
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      resume: [null, Validators.required],
      drivingLicense: [null, Validators.required],
      addressProof: [null, Validators.required],
      photo: [null, Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password').value === form.get('confirmPassword').value ? null : { mismatch: true };
  }

  onFileChange(event, field) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.registrationForm.patchValue({
        [field]: file
      });
    }
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = new FormData();
      Object.keys(this.registrationForm.controls).forEach(key => {
        formData.append(key, this.registrationForm.get(key).value);
      });

      this.tutorRegistrationService.registerTutor(this.registrationForm.value as PersonalDetails, formData)
        .subscribe(response => {
          console.log('Registration successful', response);
        }, error => {
          console.error('Registration failed', error);
        });
    }
  }
}
