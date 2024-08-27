import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'editarperfiles',
    loadChildren: () => import('./editarperfiles/editarperfiles.module').then( m => m.EditarperfilesPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'carritocompra',
    loadChildren: () => import('./carritocompra/carritocompra.module').then( m => m.CarritocompraPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'cambiocontrasena',
    loadChildren: () => import('./cambiocontrasena/cambiocontrasena.module').then( m => m.CambiocontrasenaPageModule)
  },
  {
    path: 'comics',
    loadChildren: () => import('./comics/comics.module').then( m => m.ComicsPageModule)
  },
  {
    path: 'mangas',
    loadChildren: () => import('./mangas/mangas.module').then( m => m.MangasPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'eliminar',
    loadChildren: () => import('./eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'comentarios',
    loadChildren: () => import('./comentarios/comentarios.module').then( m => m.ComentariosPageModule)
  },
  {
    path: 'recuperarcontrasena',
    loadChildren: () => import('./recuperarcontrasena/recuperarcontrasena.module').then( m => m.RecuperarcontrasenaPageModule)
  },
  {
    path: 'registroventa',
    loadChildren: () => import('./registroventa/registroventa.module').then( m => m.RegistroventaPageModule)
  },
  {
    path: 'verperfil',
    loadChildren: () => import('./verperfil/verperfil.module').then( m => m.VerperfilPageModule)
  },
  {
    path: 'productorecomendado',
    loadChildren: () => import('./productorecomendado/productorecomendado.module').then( m => m.ProductorecomendadoPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'manga',
    loadChildren: () => import('./manga/manga.module').then( m => m.MangaPageModule)
  },
  {
    path: 'notfound',
    loadChildren: () => import('./notfound/notfound.module').then( m => m.NotfoundPageModule)
  },

];
  
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
