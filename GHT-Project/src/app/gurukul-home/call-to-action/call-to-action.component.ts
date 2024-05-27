import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.css'
})
export class CallToActionComponent {
  constructor(private router: Router) {}

  navigateTo(role: string) {
    if (role === 'tutor') {
      this.router.navigate(['/tutor-registration']);
    } else if (role === 'student') {
      this.router.navigate(['/student-registration']);
    }
  }
}
