import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoventaListPageRoutingModule } from './pedidoventa-list-routing.module';

import { PedidoventaListPage } from './pedidoventa-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoventaListPageRoutingModule
  ],
  declarations: [PedidoventaListPage]
})
export class PedidoventaListPageModule {}
