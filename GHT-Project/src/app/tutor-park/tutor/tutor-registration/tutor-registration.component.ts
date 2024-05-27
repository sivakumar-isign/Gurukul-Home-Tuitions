import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tutor-registration',
  templateUrl: './tutor-registration.component.html',
  styleUrl: './tutor-registration.component.css'
})
export class TutorRegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      resume: [null, Validators.required],
      drivingLicense: [null, Validators.required],
      addressProof: [null, Validators.required],
      photo: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = new FormData();
      formData.append('resume', this.registrationForm.get('resume').value);
      formData.append('drivingLicense', this.registrationForm.get('drivingLicense').value);
      formData.append('addressProof', this.registrationForm.get('addressProof').value);
      formData.append('photo', this.registrationForm.get('photo').value);

      // Process the formData here, e.g., send it to a server
      console.log('Form Submitted', formData);
    }
  }
}
