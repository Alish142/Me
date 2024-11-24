import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Client {
  clientID: string;
  name: string;
  dob: string;
  gender: string;
  fitnessProgram: string;
  contactInfo: string;
  joinedDate: string;
  endingDate: string;
  specialHealthNotes: string;
  isVIP: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ClientDataService {
  private clients: Client[] = [
    {
      clientID: '1',
      name: 'Ram Bahadur',
      dob: '1990-05-15',
      gender: 'Male',
      fitnessProgram: 'muscle gain',
      contactInfo: 'john.doe@email.com',
      joinedDate: '2023-01-01',
      endingDate: '2023-12-31',
      specialHealthNotes: 'No allergies',
      isVIP: true
    },
    {
      clientID: '2',
      name: 'KP BAA',
      dob: '1985-08-22',
      gender: 'Female',
      fitnessProgram: 'fat loss',
      contactInfo: 'jane.smith@email.com',
      joinedDate: '2023-02-15',
      endingDate: '2023-11-30',
      specialHealthNotes: 'Mild asthma',
      isVIP: false
    },
    {
      clientID: '3',
      name: 'William Jordan',
      dob: '1978-11-30',
      gender: 'Male',
      fitnessProgram: 'overall fitness',
      contactInfo: 'bob.johnson@email.com',
      joinedDate: '2023-03-01',
      endingDate: '2024-02-29',
      specialHealthNotes: 'Previous knee injury',
      isVIP: true
    }
  ];
  private clientsSubject = new BehaviorSubject<Client[]>(this.clients);

  constructor() { }

  getClients(): Observable<Client[]> {
    return this.clientsSubject.asObservable();
  }
