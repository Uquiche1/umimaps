import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFireStorage} from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-profile-normal',
  templateUrl: './profile-normal.component.html',
  styleUrls: ['./profile-normal.component.scss'],
})
export class ProfileNormalComponent  implements OnInit {
  userEmail: string = '';
  userPhoto: string | null = null;
  selectedPhoto: File | null = null;
  constructor(private afAuth: AngularFireAuth,private router:Router,private afStorage:AngularFireStorage) { }
  logout() {
    this.router.navigate(['/login']);
  }
  retroceder(){
    this.router.navigate(['/admin/products']);
  }
  ngOnInit() {
    // Obtener el correo electrónico del usuario al cargar el componente
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userEmail = user.email || '';
      }
    });
  }
  onPhotoSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedPhoto = file;
    }
  }
  saveProfile() {
    if (this.selectedPhoto) {
      // Subir la foto al almacenamiento de Firebase
      const filePath = `user-photos/${this.selectedPhoto.name}`;
      const fileRef = this.afStorage.ref(filePath);
      const task = this.afStorage.upload(filePath, this.selectedPhoto);

      // Obtener la URL de descarga de la foto subida
      task
        .snapshotChanges()
        .pipe(finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.userPhoto = url;
            this.selectedPhoto = null;
          });
        }))
        .subscribe();
    }
  }
}
