import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { RouterModule } from '@angular/router';
import { OrderRoutes } from './orders.routing';



@NgModule({
  declarations: [
    OrdersComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule,    
    RouterModule.forChild(OrderRoutes),
  ]
})
export class OrdersModule { }
