import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'app/services/orders.service';
import { Order } from 'app/Models/Order.model';
import { TechniciansService } from 'app/services/technicians.service';
import { Technician } from 'app/Models/Technician.model';
import { Client } from 'app/Models/Client.model';

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  Orders:[Order];
  Technician: Technician;
  public dataTable: DataTable;

  constructor(public orderService:OrdersService, public technicianService: TechniciansService) { }

  async ngOnInit() {
    //const user = this.authService.getUserId();
    await  this.technicianService.getTechnicianByUserId().subscribe(
      res => {
        this.Technician = res;
        console.log(this.Technician);
        
        this.getOrders(this.Technician._id as string)
      },
      err => console.log(err)
    );

  }
  async getOrders(id:string){
    await this.orderService.getOrdersById(id).subscribe(
      res => {
          console.log(res)
          
          //this.populateDataRow(res)
      },
      err => console.log(err)
     );
  }
  populateDataRow(orders){
    console.log(orders)
    if (orders) {
        this.Orders = orders;
        let rows = [];

        this.Orders.forEach(order => {
            console.log(order)
            const Cliente = order.cliente as Client ;
            const Tecnico = order.tecnico as Technician;
            const newRow = [
              Cliente.name.toString()+Cliente.lastname.toString(),
              Cliente.email.toString(), 
              Tecnico.user.name.toString(), 
              order.descripcion.toString(), 
              order.createdAt.toString(),
              '',
              order._id
            ];
            rows.push(newRow);
        });
        this.dataTable = {
            headerRow: [ 'Cliente', 'Email Cliente', 'Técnico', 'Descripción' ],
            footerRow: [ 'Cliente', 'Email Cliente', 'Técnico', 'Descripción' ],
            dataRows: rows
         };

    } else {
        this.dataTable = {
            headerRow: [ 'Cliente', 'Email Cliente', 'Técnico', 'Descripción' ],
            footerRow: [ 'Cliente', 'Email Cliente', 'Técnico', 'Descripción' ],
            dataRows: [
                ['', '', '', '']
            ]
         };
    }
  }


}
