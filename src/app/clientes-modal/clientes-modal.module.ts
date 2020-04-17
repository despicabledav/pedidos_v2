import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesModalPageRoutingModule } from './clientes-modal-routing.module';

import { ClientesModalPage } from './clientes-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesModalPageRoutingModule
  ],
  declarations: [ClientesModalPage]
})
export class ClientesModalPageModule {}
