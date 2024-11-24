import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientDataService, Client } from '../client-data.service';


@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ClientSearchComponent {
  searchQuery = '';
  searchResults: Client[] = [];

  constructor(private clientDataService: ClientDataService) { }

  searchClients() {
    this.searchResults = this.clientDataService.searchClients(this.searchQuery);
  }
}

