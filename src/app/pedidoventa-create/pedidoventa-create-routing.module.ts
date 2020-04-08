import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoventaCreatePage } from './pedidoventa-create.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoventaCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoventaCreatePageRoutingModule {}
