import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedDataService } from '../../../services/shared-data.service';
import { PersonalDetails } from '../../../models/personal-details.model';
import { TutorRegistrationService } from '../../../services/tutor-registration.service';
@Component({
  selector: 'app-tutor-registration',
  templateUrl: './tutor-registration.component.html',
  styleUrls: ['./tutor-registration.component.css']
})
export class TutorRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  personalDetails: PersonalDetails;

  constructor(
    private fb: FormBuilder,
    private sharedDataService: SharedDataService,
    private registrationService: TutorRegistrationService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      resume: [null, Validators.required],
      drivingLicense: [null, Validators.required],
      addressProof: [null, Validators.required],
      photo: [null, Validators.required]
    });

    this.sharedDataService.personalDetails$.subscribe(details => {
      this.personalDetails = details;
    });
  }

  onSubmit() {
    if (this.registrationForm.valid && this.personalDetails) {
      const formData = new FormData();
      formData.append('resume', this.registrationForm.get('resume').value);
      formData.append('drivingLicense', this.registrationForm.get('drivingLicense').value);
      formData.append('addressProof', this.registrationForm.get('addressProof').value);
      formData.append('photo', this.registrationForm.get('photo').value);

      this.registrationService.registerTutor(this.personalDetails, formData).subscribe(response => {
        console.log('Data submitted successfully', response);
      }, error => {
        console.error('Error submitting data', error);
      });
    }
  }
}
