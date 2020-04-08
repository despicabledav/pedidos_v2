import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoventaEditPageRoutingModule } from './pedidoventa-edit-routing.module';

import { PedidoventaEditPage } from './pedidoventa-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoventaEditPageRoutingModule
  ],
  declarations: [PedidoventaEditPage]
})
export class PedidoventaEditPageModule {}
