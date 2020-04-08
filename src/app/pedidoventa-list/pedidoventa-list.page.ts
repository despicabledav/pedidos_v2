import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pedidoventa-list',
  templateUrl: './pedidoventa-list.page.html',
  styleUrls: ['./pedidoventa-list.page.scss'],
})
export class PedidoventaListPage implements OnInit {

  pedidoventasData: any;

  constructor(
    public apiService: ApiService
  ) {
    this.pedidoventasData = [];
  }

  ngOnInit() {
    this.getAllPedidoVentas();
  }

  getAllPedidoVentas() {
    //Get saved list of pedidoventas
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.pedidoventasData = response;
    })
  }


  delete(item) {
    //Delete item in PedidoVenta data
    this.apiService.deleteItem(item.$id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllPedidoVentas();
    });
  }

}
