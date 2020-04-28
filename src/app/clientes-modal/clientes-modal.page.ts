import { Component, OnInit } from '@angular/core';
import { ClientesService } from "../services/clientes.service";
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-clientes-modal',
  templateUrl: './clientes-modal.page.html',
  styleUrls: ['./clientes-modal.page.scss'],
})
export class ClientesModalPage implements OnInit {


  clientesData: any;
  textSearch = '';

  constructor(
    public clientesService: ClientesService,
    private modalCtrl: ModalController
  ) {
    this.clientesData = [];
   }

  ngOnInit() {
    this.getAllClientes();
  }

  getAllClientes() {
    //Get saved list of clientes
    this.clientesService.getList().subscribe(response => {
      console.log(response);
      this.clientesData = response;
    })
  } 

  salirModal( item ){
    console.log('Co_Cli: '+item.co_cli);
    this.modalCtrl.dismiss({
      nombre: item.co_cli
    });
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  search( event ){
    this.textSearch = event.detail.value;
  } 

}
