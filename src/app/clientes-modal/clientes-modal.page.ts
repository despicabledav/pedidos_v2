import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ClientesService } from "../services/clientes.service";

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
    
    this.getAllClientes();
  }

  async closeModal() {
    const onClosedData: string = "";
    await this.modalController.dismiss(onClosedData);
  }

  getAllClientes() {
    //Get saved list of clientes
    this.clientesService.getList().subscribe(response => {
      console.log(response);
      this.clientesData = response;
    })
  }

}
