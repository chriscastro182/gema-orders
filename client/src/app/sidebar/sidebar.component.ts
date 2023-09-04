import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

declare var $:any;
//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
    {
        path: '/orders',
        title: 'Órdenes',
        type: 'sub',
        icontype: 'pe-7s-plugin',
        children: [
            {path: 'create-order', title: 'Crear Orden', ab:'CO'},
            {path: 'orders', title: 'Ordenes', ab:'O'},
        ]
    },{
        path: '/user',
        title: 'Usuarios',
        type: 'sub',
        icontype: 'pe-7s-users',
        children: [
            {path: 'user', title: 'Perfil', ab:'PE'}
        ]
    }
];
export const ADMIN_ROUTES: RouteInfo[] = [/* {
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'pe-7s-graph'
} ,*/{
    path: '/catalogs',
    title: 'Catálogos',
    type: 'sub',
    icontype: 'pe-7s-browser',
    children: [
        {path: 'families', title: 'Familias', ab:'FA'},
        {path: 'appliance', title: 'Productos', ab:'P'},
    ]
    },{
        path: '/orders',
        title: 'Órdenes',
        type: 'sub',
        icontype: 'pe-7s-date',
        children: [
            {path: 'create-order', title: 'Crear Orden', ab:'CO'},
            {path: 'orders', title: 'Ordenes', ab:'O'},
        ]
    },{
    path: '/user',
    title: 'Usuarios',
    type: 'sub',
    icontype: 'pe-7s-users',
    children: [
        {path: 'user', title: 'Perfil', ab:'PE'},
        {path: 'users', title: 'Usuarios', ab:'US'},
        {path: 'clients', title: 'Clientes', ab:'CL'},
        {path: 'technicans', title: 'Técnicos', ab:'TN'}
    ]
}/* ,{
    path: '/maps',
    title: 'Maps',
    type: 'sub',
    icontype: 'pe-7s-map-marker',
    children: [
        {path: 'google', title: 'Google Maps', ab:'GM'},
        {path: 'fullscreen', title: 'Full Screen Map', ab:'FSM'},
        {path: 'vector', title: 'Vector Map', ab:'VM'}
    ]
},{
    path: '/charts',
    title: 'Charts',
    type: 'link',
    icontype: 'pe-7s-graph1'

},{
    path: '/calendar',
    title: 'Calendar',
    type: 'link',
    icontype: 'pe-7s-date'
},{
    path: '/pages',
    title: 'Pages',
    type: 'sub',
    icontype: 'pe-7s-gift',
    children: [
        {path: 'user', title: 'User Page', ab:'UP'},
        {path: 'login', title: 'Login Page', ab:'LP'},
        {path: 'register', title: 'Register Page', ab:'RP'},
        {path: 'lock', title: 'Lock Screen Page', ab:'LSP'}
    ]
} */
];


@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    public menuItems: any[];
    isAdmin: boolean;

    
    constructor( public authService: AuthService) {}

    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

    ngOnInit() {
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        this.authService.isAdminByToken().subscribe(
            res => {
                console.log(res)
                this.isAdmin = res
                if (res) {
                    this.menuItems = ADMIN_ROUTES.filter(menuItem => menuItem);
                    
                } else {
                    this.menuItems = ROUTES.filter(menuItem => menuItem);
                    
                }
            },
            err => {
                console.log(err.status)
                this.authService.getSessionBehavior(err.status)
            }
          )

        isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

        if (isWindows){
           // if we are on windows OS we activate the perfectScrollbar function
           $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
           $('html').addClass('perfect-scrollbar-on');
       } else {
           $('html').addClass('perfect-scrollbar-off');
       }
    }
    ngAfterViewInit(){
        var $sidebarParent = $('.sidebar .nav > li.active .collapse li.active > a').parent().parent().parent();

        var collapseId = $sidebarParent.siblings('a').attr("href");

        $(collapseId).collapse("show");
    }
}
