import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDataService, Client } from '../client-data.service';

@Component({
  selector: 'app-vip-clients',
  templateUrl: './vip-clients.component.html',
  styleUrls: ['./vip-clients.component.css'],
  standalone: true,
  imports: [CommonModule]
})
