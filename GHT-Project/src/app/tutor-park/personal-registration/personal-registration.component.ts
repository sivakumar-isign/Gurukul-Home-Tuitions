// personal-registration.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalDetails } from '../../models/personal-details.model';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-personal-registration',
  templateUrl: './personal-registration.component.html',
  styleUrls: ['./personal-registration.component.css']
})
export class PersonalRegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      city: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Changed to mobileNo
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : { notSame: true };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.sharedDataService.setPersonalDetails(this.registrationForm.value as PersonalDetails);
    }
  }
}
