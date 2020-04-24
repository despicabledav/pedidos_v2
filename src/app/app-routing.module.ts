import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'create', loadChildren: () => import('./pedidoventa-create/pedidoventa-create.module').then(m => m.PedidoventaCreatePageModule) },
  { path: 'edit/:$id', loadChildren: () => import('./pedidoventa-edit/pedidoventa-edit.module').then(m => m.PedidoventaEditPageModule) },
  { path: 'list', loadChildren: () => import('./pedidoventa-list/pedidoventa-list.module').then(m => m.PedidoventaListPageModule) },
  { path: 'detail', loadChildren: () => import('./pedidoventa-detail/pedidoventa-detail.module').then(m => m.PedidoventaDetailPageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule) },
  { path: 'cliente-list', loadChildren: () => import('./cliente-list/cliente-list.module').then( m => m.ClienteListPageModule) },  {
    path: 'clientes-modal',
    loadChildren: () => import('./clientes-modal/clientes-modal.module').then( m => m.ClientesModalPageModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./inventario/inventario.module').then( m => m.InventarioPageModule)
  },
  {
    path: 'sender',
    loadChildren: () => import('./sender/sender.module').then( m => m.SenderPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
