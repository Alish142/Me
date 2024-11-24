
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ClientDataService, Client } from '../client-data.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientDataService: ClientDataService) { }

  ngOnInit() {
    this.clientDataService.getClients().subscribe(clients => {
      this.clients = clients;
    });
  }

  deleteClient(clientID: string) {
    if (confirm('Are you sure you want to delete this client?')) {
      this.clientDataService.deleteClient(clientID);
    }
  }
}

