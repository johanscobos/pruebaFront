import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-edit-data',
  templateUrl: './modal-edit-data.component.html',
  styleUrls: ['./modal-edit-data.component.css']
})
export class ModalEditDataComponent implements OnInit {

  miFormulario!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      id: ['', Validators.required],
      nombres: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      activo: [false],
      rolId: ['', Validators.required],
      descripcion: ['']
    });
  }

  onSubmit(): void {
    if (this.miFormulario.valid) {
      // Realiza aquí la lógica para enviar el formulario
    } else {
      // El formulario no es válido, muestra mensajes de error o realiza alguna acción
    }
  }

}
