import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registroForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async registrar(): Promise<void> {
    try {
      const { email, password } = this.registroForm.value;
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      // Registro exitoso, realizar acciones adicionales si es necesario
      this.router.navigateByUrl('/home'); // Redirigir al inicio
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      // Manejar el error de registro, mostrar un mensaje de error, etc.
    }
  }

  async registrarConGoogle(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await this.afAuth.signInWithPopup(provider);
      // Registro exitoso con Google, realizar acciones adicionales si es necesario
      this.router.navigateByUrl('/home'); // Redirigir al inicio
    } catch (error) {
      console.error('Error al registrar con Google:', error);
      // Manejar el error de registro con Google, mostrar un mensaje de error, etc.
    }
  }
}

