import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoventaDetailPage } from './pedidoventa-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoventaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoventaDetailPageRoutingModule {}
