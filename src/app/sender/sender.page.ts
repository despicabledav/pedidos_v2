import { Component, OnInit } from '@angular/core';
import { ClientesService } from "../services/clientes.service";
import { Router } from '@angular/router';
import { SenderService } from '../services/sender.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.page.html',
  styleUrls: ['./sender.page.scss'],
})
export class SenderPage implements OnInit {

  clientesData: any;

  constructor(
    public clientesService: ClientesService,
    private router: Router,
    private senderService: SenderService
  ) {
    this.clientesData = [];
   }

  ngOnInit() {
    this.getAllClientes();
  }

  filterClientes(ev: any) {
    this.getAllClientes();
    const val = ev.target.value;
    if (val && val.trim() != '')
    {
      this.clientesData = this.clientesData.filter((item) => {
        return (item.cli_des.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }
  }

  getAllClientes() {
    //Get saved list of clientes
    this.clientesService.getList().subscribe(response => {
      console.log(response);
      this.clientesData = response;
    })
  }

  goReceiver(){
    this.senderService.sendObjectSource(this.clientesData);
    this.router.navigate(['/create']);
  }

}
