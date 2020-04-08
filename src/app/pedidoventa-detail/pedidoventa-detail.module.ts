import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoventaDetailPageRoutingModule } from './pedidoventa-detail-routing.module';

import { PedidoventaDetailPage } from './pedidoventa-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoventaDetailPageRoutingModule
  ],
  declarations: [PedidoventaDetailPage]
})
export class PedidoventaDetailPageModule {}
