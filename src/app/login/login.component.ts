import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(public afAuth: AngularFireAuth,private router: Router) {}
  async login(): Promise<void> {
    try {
      const { email, password } = this;
      await this.afAuth.signInWithEmailAndPassword(email, password);
      // Inicio de sesión exitoso, redirigir al componente de inicio
      this.router.navigateByUrl('/admin/products');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }
  loginWithGoogle() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        // Navegar al componente "about" después de iniciar sesión exitosamente
        this.router.navigate(['/home']); // Ruta definida en AppRoutingModule
      })
      .catch(error => {
        // Manejar el error de inicio de sesión aquí si es necesario
        console.error('Error al iniciar sesión con Google:', error);
      });
  }
  registro() {
    this.router.navigate(['/registro']);
  }
}