import { Component, OnInit } from '@angular/core';
import { PedidoVenta } from '../models/pedido-venta';
import { ApiService } from '../services/api.service';
import { ClientesService } from "../services/clientes.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidoventa-create',
  templateUrl: './pedidoventa-create.page.html',
  styleUrls: ['./pedidoventa-create.page.scss'],
})
export class PedidoventaCreatePage implements OnInit {

  data: PedidoVenta;
  clientesData: any;
 
  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new PedidoVenta();
    this.clientesData = [];
  }
 
  ngOnInit() {
    this.getAllClientes();
  }
 
  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['list']);
    });
 
  }

  getAllClientes() {
    //Get saved list of clientes
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.clientesData = response;
    })
  }

}
