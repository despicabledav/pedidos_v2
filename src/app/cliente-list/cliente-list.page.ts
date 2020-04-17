import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.page.html',
  styleUrls: ['./cliente-list.page.scss'],
})
export class ClienteListPage implements OnInit {

  clientesData: any;

  constructor(
    private router: Router,
    public clientesService: ClientesService
  ) {
    this.clientesData = [];
   }

  ngOnInit() {
    this.getAllClientes();
  }

  goBack(){
    this.router.navigate(['/home']);
  }

  getAllClientes() {
    //Get saved list of pedidoventas
    this.clientesService.getList().subscribe(response => {
      console.log(response);
      this.clientesData = response;
    })
  }

  delete(item) {
    //Delete item in PedidoVenta data
    this.clientesService.deleteItem(item.$id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllClientes();
    });
  }

}
