import { Component, OnInit } from '@angular/core';
import { ClientesService } from "../services/clientes.service";

@Component({
  selector: 'app-clientes-modal',
  templateUrl: './clientes-modal.page.html',
  styleUrls: ['./clientes-modal.page.scss'],
})
export class ClientesModalPage implements OnInit {


  clientesData: any;

  constructor(
    public clientesService: ClientesService
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

}
