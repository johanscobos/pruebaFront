import { Component, OnInit } from '@angular/core';
import { ServicesDataService } from './services/services-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioBack, rolID } from './interfaces/interfaceData';
import { Router } from '@angular/router';
import { log } from 'console';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditDataComponent } from '../modal-edit-data/modal-edit-data.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {
  
  usuarios: UsuarioBack[] = [];

  users!: UsuarioBack[];
  addUserForm!: FormGroup;
  enviado = false;
  rolIdData!: rolID[];
  mostrarModal:boolean = false;

  mostrarAdd: boolean = false;

  constructor(
    private dataBD:ServicesDataService,
    private dataService: ServicesDataService,
    private formBuilder: FormBuilder, 
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUsers();

    this.addUserForm = this.formBuilder.group({
      nombres: ['', Validators.required],
      email: ['', Validators.required],
      rol:  {
        rolId: 1,
      },
      activo: [true, Validators.required],
    });
  }

  getUsers(): void {
    this.dataService.getUsers().subscribe(
      (data) => {
        this.users = data;

        console.log('usuarios log back', this.users)
      },
      (error) => {
      }
    );
  }

  mostrarAddUserInputs() {
    this.enviado = true;
    this.mostrarAdd = true;
    console.log('Hola Sebas');
  }

  onSubmit() {
    this.enviado = true;


    if (this.addUserForm.invalid) {
      return;
    }

  }

  showModalEdit(){
    this.openDialog();
  }

  openDialog(): void {
    this.dialog.open(ModalEditDataComponent);
  }

  addUser(){
    console.log(this.addUserForm.value)
    this.dataService.agregarUsuario(this.addUserForm.value).subscribe({
      next: (data) => {
          console.log('esta es la respuesta del back', data);
          location.reload();
        }
      });
  }

}
