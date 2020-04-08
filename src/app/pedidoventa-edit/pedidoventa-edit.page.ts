import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoVenta } from '../models/pedido-venta';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pedidoventa-edit',
  templateUrl: './pedidoventa-edit.page.html',
  styleUrls: ['./pedidoventa-edit.page.scss'],
})
export class PedidoventaEditPage implements OnInit {

  $id: number;
  data: PedidoVenta;
 
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new PedidoVenta();
  }
 
  ngOnInit() {
    this.$id = this.activatedRoute.snapshot.params["$id"];
    //get item details using id
    this.apiService.getItem(this.$id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }
 
  update() {
    //Update item by taking id and updated data object
    this.apiService.updateItem(this.$id, this.data).subscribe(response => {
      this.router.navigate(['list']);
    })
  }

}
