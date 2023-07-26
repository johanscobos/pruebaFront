import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  enviado = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    });
  }

  onSubmit() {
    this.enviado = true;

    if (this.loginForm.invalid) {
      return;
    }

    if (this.loginForm.value.usuario === 'root' && this.loginForm.value.contraseña === 'root') {
      this.router.navigate(['/dashboard']);
    } else {
    }
  }
}