import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ClientesService } from "../services/clientes.service";
import { Cliente } from "../models/cliente";

@Component({
  selector: 'app-clientes-modal',
  templateUrl: './clientes-modal.page.html',
  styleUrls: ['./clientes-modal.page.scss'],
})
export class ClientesModalPage implements OnInit {

  modalTitle: string;
  modelId: number;
  clientesData: any;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    public clientesService: ClientesService
  ) {
    this.clientesData = [];
   }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
    this.clientesData = this.navParams.data.paramID;
    
    this.getAllClientes();
  }

  async closeModal() {
    const onClosedData: string = "Wrapped up!";
    await this.modalController.dismiss(onClosedData);
  }

  selectCliente(cliente: Cliente):void {
    this.modalController.dismiss(cliente);
  }

  getAllClientes() {
    //Get saved list of clientes
    this.clientesService.getList().subscribe(response => {
      console.log(response);
      this.clientesData = response;
    })
  }

}
