import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoventaCreatePageRoutingModule } from './pedidoventa-create-routing.module';

import { PedidoventaCreatePage } from './pedidoventa-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoventaCreatePageRoutingModule
  ],
  declarations: [PedidoventaCreatePage]
})
export class PedidoventaCreatePageModule {}
