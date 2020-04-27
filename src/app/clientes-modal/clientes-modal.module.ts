import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesModalPageRoutingModule } from './clientes-modal-routing.module';

import { ClientesModalPage } from './clientes-modal.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesModalPageRoutingModule,
    PipesModule
  ],
  declarations: [ClientesModalPage]
})
export class ClientesModalPageModule {}
