import { Component, OnInit } from '@angular/core';
import { LineaarticuloService } from '../services/lineaarticulo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
})
export class InventarioPage implements OnInit {

  lineaarticulosData: any;

  constructor(
    private router: Router,
    public lineaarticuloService: LineaarticuloService
  ) {
    this.lineaarticulosData = [];
   }

  ngOnInit() {
    this.getAllLineaArticulos();
  }

  goBack(){
    this.router.navigate(['/home']);
  }

  getAllLineaArticulos() {
    //Get saved list of lineaarticulos
    this.lineaarticuloService.getList().subscribe(response => {
      console.log(response);
      this.lineaarticulosData = response;
    })
  }


  delete(item) {
    //Delete item in LineaArticulo data
    this.lineaarticuloService.deleteItem(item.$id).subscribe(response => {
      //Update list after delete is successful
      this.getAllLineaArticulos();
    });
  }

}
