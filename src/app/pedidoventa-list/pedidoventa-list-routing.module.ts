import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoventaListPage } from './pedidoventa-list.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoventaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoventaListPageRoutingModule {}
