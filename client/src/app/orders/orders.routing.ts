import { Routes } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrdersComponent } from './orders/orders.component';


export const OrderRoutes: Routes = [{
    path: '',
    children: [ {
        path: 'orders/create-order',
        component: CreateOrderComponent
    },{
        path: 'orders/orders',
        component: OrdersComponent
    }]
}];