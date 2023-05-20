import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { VetsService } from '../vets.service';

@Component({
  selector: 'register',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent {
  /**
   * variable que almacena el nombre de usuario
   */
  userName = '';

  /**
   * formulario de inicio de sesion construido con FormBuilder
   * @type {FormBuilder}
   */
  checkoutForm = this.formBuilder.group({
    name_vet: '',
    email: '',
    location: ''
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private vetService: VetsService) { }

  onSubmit(): void {
    // Obtiene los valores del formulario de inicio de sesión
    const nameParam: string = this.checkoutForm.value.name_vet ?? '';
    const emailParam: string = this.checkoutForm.value.email ?? '';
    const locationParam: string = this.checkoutForm.value.location ?? '';

    // Envía una solicitud para agregar un veterinario al servidor
    this.vetService.addVet(nameParam, emailParam, locationParam);

    this.checkoutForm.reset();
  }
}
