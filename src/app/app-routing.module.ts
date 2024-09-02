import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlonePageComponent } from './alone/pages/alone-page/alone-page.component';

const routes: Routes = [
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then((m) => m.MapsModule),
  },
  // Vamos a cargarl al standalone component de manera perezosa
  // Se puede cargar de manera tradicional pero en ese caso deberia ser parte del App.module
  {
    path: 'alone',
    loadComponent: () =>
      import('./alone/pages/alone-page/alone-page.component').then(
        (c) => c.AlonePageComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'maps',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
