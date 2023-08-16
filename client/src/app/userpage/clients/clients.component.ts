import { Component, OnInit } from '@angular/core';
import { Client } from 'app/Models/Client.model'
import { ClientsService } from 'app/services/clients.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
declare var $:any;

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  Clients:[Client]
  constructor(private clientService: ClientsService) { }

  public dataTable: DataTable; 
  activeModal:Boolean = false;
  activeDeleteModal:Boolean = false;
  Cliente:Client = new Client();
  client_id:String;
  isEditModalBool:Boolean = false;

  async ngOnInit() {
    await this.getAllClients();
  }

  async getAllClients(){
    await this.clientService.getClients().subscribe(
      res => {
        console.log(res)
        this.populateDataRow(res)
      },
      err => console.log(err)
    );
  }

  populateDataRow(clients) {
    if (clients) {
      this.Clients = clients;
      let rows = [];
 
      this.Clients.forEach(user => {
        const newRow = [
          user.name.toString(),
          user.lastname.toString(),
          user.email.toString(),
          user.phone.toString(),
          user.createdAt.toString(),
          '',
          user._id
        ];
        rows.push(newRow);
      });
      this.dataTable = {
        headerRow: ['Nombre', 'Apellido', 'email', 'Teléfono', 'Fecha', 'Acciones'],
        footerRow: ['Nombre', 'Apellido', 'email', 'Teléfono', 'Fecha', 'Acciones'],
        dataRows: rows
      };

    } else {
      this.dataTable = {
        headerRow: ['Nombre', 'Apellido', 'email', 'Teléfono', 'Fecha', 'Acciones'],
        footerRow: ['Nombre', 'Apellido', 'email', 'Teléfono', 'Fecha', 'Acciones'],
        dataRows: [
          ['Airi Satou', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
          ['Angelica Ramos', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
          ['Ashton Cox', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
          ['Bradley Greer', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
          ['Brenden Wagner', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
          ['Brielle Williamson', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
          ['Caesar Vance', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
          ['Cedric Kelly', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
          ['Charde Marshall', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
          ['Colleen Hurst', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
          ['Yuri Berry', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round']
        ]
      };
    }
  }

  async getAllClientsUpdated(){
    await this.clientService.getClients().subscribe(
      res => {
        console.log(res)
        this.updateDatatableClients(res)
      },
      err => console.log(err)
    );
  }


  updateDatatableClients(clients)
  {
    this.dataTable.dataRows = [];
    this.dataTable.footerRow = [];
    this.dataTable.headerRow = [];

    if (clients) {
      this.Clients = clients;
      let rows = [];
 
      this.Clients.forEach(user => {
        const newRow = [
          user.name.toString(),
          user.lastname.toString(),
          user.email.toString(),
          user.phone.toString(),
          user.createdAt.toString(),
          '',
          user._id
        ];
        rows.push(newRow);
      });
      this.dataTable = {
        headerRow: ['Nombre', 'Apellido', 'email', 'Teléfono', 'Fecha', 'Acciones'],
        footerRow: ['Nombre', 'Apellido', 'email', 'Teléfono', 'Fecha', 'Acciones'],
        dataRows: rows
      };

    } else {
      this.dataTable = {
        headerRow: ['Nombre', 'Apellido', 'email', 'Teléfono', 'Fecha', 'Acciones'],
        footerRow: ['Nombre', 'Apellido', 'email', 'Teléfono', 'Fecha', 'Acciones'],
        dataRows: [
          ['Airi Satou', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
          ['Angelica Ramos', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
          ['Ashton Cox', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
          ['Bradley Greer', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
          ['Brenden Wagner', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
          ['Brielle Williamson', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
          ['Caesar Vance', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
          ['Cedric Kelly', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
          ['Charde Marshall', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
          ['Colleen Hurst', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
          ['Yuri Berry', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round']
        ]
      };
    }
  }

  addClient = () => {
    this.Cliente = new Client();
    this.activeModalComponent();
  }

  activeModalComponent = () => {
    this.activeModal = !this.activeModal;
  }

  activeDeleteModalComponent = () => {
    this.activeDeleteModal = !this.activeDeleteModal;
  } 

  removeClient = (id:string) => {
    this.Cliente = this.Clients.find(C => C._id === id);
    this.activeDeleteModalComponent();
  }

  editClient= (id:string) => {
    this.Cliente = this.Clients.find(C => C._id === id);
    this.activeModalComponent();
  }


  ansDeleteClient(clientId)
  {
    console.log(clientId);
    Swal.fire({
      title: '¿Realmente deseas elminar este usuario?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) { 
        this.deleteClientById(clientId);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  

  deleteClientById(clientId) { 
    this.clientService.deleteClientbyId(clientId).subscribe({
      next: (response) => {
        Swal.fire('¡Éxito!', 'Usuario eliminado correctamente', 'success');
        this.getAllClientsUpdated();
      }, error: (e) => {
        console.log(e);
      }
    })
  }
  
  ngAfterViewInit() {
    $('#datatables').DataTable({
      "pagingType": "full_numbers",
      "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
      responsive: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
        search: "_INPUT_",
        searchPlaceholder: "Search records",
      }

    });


    var table = $('#datatables').DataTable();

    // Edit record
    table.on('click', '.edit', function () {
      var $tr = $(this).closest('tr');

      var data = table.row($tr).data();
      alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
    });

    // Delete a record
    table.on('click', '.remove', function (e) {
      var $tr = $(this).closest('tr');
      table.row($tr).remove().draw();
      e.preventDefault();
    });

    //Like record
    table.on('click', '.like', function () {
      alert('You clicked on Like button');
    });
  }


}
