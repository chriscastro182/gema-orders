import { Component, OnInit } from '@angular/core';
import { Order } from 'app/Models/Order.model';
import { Technician } from 'app/Models/Technician.model';
import { Client } from 'app/Models/Client.model'
import { CatalogService } from 'app/services/catalog.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  Tecnicos:[Technician];
  Clientes: [Client];
  Orden:Order;

  constructor(private catalogsService:CatalogService) { this.Orden = { descripcion: '',  cliente: '', tecnico: '' }; }

  ngOnInit(): void {
    this.getCatalogos();
  }

  async getCatalogos (){
    await this.catalogsService.getOrdersCatalogs().subscribe(
      res => {
        this.Tecnicos = res.Tecnicos;
        this.Clientes = res.Clientes;
        console.log(this.Tecnicos)
      },
      err => console.error(err)
    )
  }

}
