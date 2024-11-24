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
