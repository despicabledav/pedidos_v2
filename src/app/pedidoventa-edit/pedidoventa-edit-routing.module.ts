import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoventaEditPage } from './pedidoventa-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoventaEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoventaEditPageRoutingModule {}
