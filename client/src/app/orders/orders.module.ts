import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { RouterModule } from '@angular/router';
import { OrderRoutes } from './orders.routing';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OrdersComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule,    
    FormsModule,
    RouterModule.forChild(OrderRoutes),
  ]
})
export class OrdersModule { }
