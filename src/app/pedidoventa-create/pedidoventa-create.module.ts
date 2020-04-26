import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoventaCreatePageRoutingModule } from './pedidoventa-create-routing.module';

import { PedidoventaCreatePage } from './pedidoventa-create.page';
import { ClientesModalPage } from '../clientes-modal/clientes-modal.page';
import { ClientesModalPageModule } from '../clientes-modal/clientes-modal.module';

@NgModule({
  entryComponents: [
    ClientesModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoventaCreatePageRoutingModule,
    ClientesModalPageModule
  ],
  declarations: [PedidoventaCreatePage]
})
export class PedidoventaCreatePageModule {}
