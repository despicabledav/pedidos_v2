import { Component, OnInit } from '@angular/core';
import { PedidoVenta } from '../models/pedido-venta';
import { Pedidoventareng } from "../models/pedidoventareng";
import { ApiService } from '../services/api.service';
import { PedidoventarengService } from "../services/pedidoventareng.service";
import { ClientesService } from "../services/clientes.service";
import { ArticuloService } from "../services/articulo.service";
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ClientesModalPage } from '../clientes-modal/clientes-modal.page'
import { SenderService } from '../services/sender.service';

@Component({
  selector: 'app-pedidoventa-create',
  templateUrl: './pedidoventa-create.page.html',
  styleUrls: ['./pedidoventa-create.page.scss'],
})
export class PedidoventaCreatePage implements OnInit {

  data: PedidoVenta;
  data2: Pedidoventareng;
  clientesData: any;
  articulosData: any;
  dataReturned: any;
  cliente: any;
 
  constructor(
    public apiService: ApiService,
    public clientesService: ClientesService,
    public pedidoventarengService: PedidoventarengService,
    public articuloService: ArticuloService,
    public router: Router,
    public modalController: ModalController,
    private senderService: SenderService
  ) {
    this.data = new PedidoVenta();
    this.data2 = new Pedidoventareng();
    this.clientesData = [];
    this.articulosData = [];
    this.cliente = [];
  }
 
  ngOnInit() {
    this.getAllClientes();
    this.getAllArticulos();
    this.senderService.$getObjectSource.subscribe(data => {
      console.log(data);
      this.clientesData = data;
    }).unsubscribe();
  }
 
  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      console.log(this.data);
      this.router.navigate(['list']);
    });
  }

  submitForm2() {
    this.pedidoventarengService.createItem(this.data2).subscribe((response) => {
      console.log(response);
    });
  }

  getAllClientes() {
    //Get saved list of clientes
    this.clientesService.getList().subscribe(response => {
      console.log(response);
      this.clientesData = response;
    })
  }

  getAllArticulos() {
    //Get saved list of clientes
    this.articuloService.getList().subscribe(response => {
      console.log(response);
      this.articulosData = response;
    })
  }

}
