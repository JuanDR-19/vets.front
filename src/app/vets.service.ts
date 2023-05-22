import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

interface Vet {
  name_vet: string;
  location: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class VetsService {
  private vetSubject = new BehaviorSubject<Vet[]>([]);
  vet$ = this.vetSubject.asObservable();
  constructor(private http: HttpClient) { }

  addVet(vet_name: string, location: string, email: string): void {
    const newVet: Vet = {
      name_vet: vet_name,
      location: location,
      email: email
    };
  this.http.post<Vet[]>(`http://localhost:8081/new_vet`, newVet).subscribe(
      response => {
        console.log(response);
        // Actualizar el estado de vetSubject
        const updatedVets = this.vetSubject.getValue().concat(newVet);
        this.vetSubject.next(updatedVets);
      },
      error => {
        console.error(error);
      }
    );
  }
  
}

