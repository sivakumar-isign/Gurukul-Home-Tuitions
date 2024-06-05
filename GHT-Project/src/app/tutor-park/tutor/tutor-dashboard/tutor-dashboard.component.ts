import { Component } from '@angular/core';

@Component({
  selector: 'app-tutor-dashboard',
  templateUrl: './tutor-dashboard.component.html',
  styleUrl: './tutor-dashboard.component.css'
})
export class TutorDashboardComponent {
  student = {
    title: '',
    firstName: '',
    lastName: '',
    class: '',
    location: '',
    subjects: '',
    notes: ''
  };

  payments = {
    invoices: '',
    dates: '',
    status: ''
  };

  generateMonthlyInvoice() {
    // Logic to generate monthly invoice
    console.log('Generating monthly invoice...');
  }

  createNewSummary() {
    // Logic to create a new summary
    console.log('Creating new summary...');
  }

  editProfile() {
    // Logic to edit profile
    console.log('Editing profile...');
  }

  demoLinks() {
    // Logic for demo links
    console.log('Demo links...');
  }
}
