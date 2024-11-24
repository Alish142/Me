import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientDataService, Client } from '../client-data.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class ClientFormComponent implements OnInit {
  clientForm: FormGroup;
  isEditMode = false;
  
constructor(
    private fb: FormBuilder,
    private clientDataService: ClientDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.clientForm = this.fb.group({
      clientID: ['', Validators.required],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      fitnessProgram: ['', Validators.required],
      contactInfo: ['', Validators.required],
      joinedDate: ['', Validators.required],
      endingDate: ['', Validators.required],
      specialHealthNotes: [''],
      isVIP: [false]
    });

    ngOnInit() {
    const clientID = this.route.snapshot.paramMap.get('id');
    if (clientID) {
      this.isEditMode = true;
      const client = this.clientDataService.getClientById(clientID);
      if (client) {
        this.clientForm.patchValue(client);
      }
    }
  }

  onSubmit() {
    if (this.clientForm.valid) {
      const clientData: Client = this.clientForm.value;
      if (this.isEditMode) {
        this.clientDataService.updateClient(clientData);
      } else {
        this.clientDataService.addClient(clientData);
      }
      this.router.navigate(['/']);
    }
  }
}
