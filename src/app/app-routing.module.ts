import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { DashboardNormalComponent } from './dashboard-normal/dashboard-normal.component';
import { ProfileNormalComponent } from './profile-normal/profile-normal.component';
import { SettingsNormalComponent } from './settings-normal/settings-normal.component';
import { NotificationsNormalComponent } from './notifications-normal/notifications-normal.component';

import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { UsersAdminComponent } from './users-admin/users-admin.component';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ReportsAdminComponent } from './reports-admin/reports-admin.component';
import { RegistroComponent } from './registro/registro.component';
const routes: Routes = [
  // Rutas para el usuario normal
  { path: 'dashboard', component: DashboardNormalComponent },
  { path: 'profile', component: ProfileNormalComponent },
  { path: 'settings', component: SettingsNormalComponent },
  { path: 'notifications', component: NotificationsNormalComponent },

  // Rutas para el administrador
  { path: 'admin/dashboard', component: DashboardAdminComponent },
  { path: 'admin/users', component: UsersAdminComponent },
  { path: 'admin/products', component: ProductsAdminComponent },
  { path: 'admin/reports', component: ReportsAdminComponent },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'registro', // Ruta para el componente de inicio de sesión
    component: RegistroComponent
  },
  {
    path: 'login', // Ruta para el componente de inicio de sesión
    component: LoginComponent
  },
  {
    path: 'about', // Ruta para el componente de inicio de sesión
    component: AboutComponent
  },
  {
    path: '', // Ruta por defecto, redirige a 'home'
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
