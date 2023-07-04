import { Component, OnInit } from '@angular/core';
import { User } from 'app/Models/User.model';
import { UsersService } from 'app/services/users.service';
import Swal from 'sweetalert2';
declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  Users:[User]

  constructor(private userService: UsersService) { }

  public dataTable: DataTable;
  activeModal:Boolean = false;
  activeDeleteModal:Boolean = false;
  User:User = new User();

  async ngOnInit(){
      
       await this.userService.getUsers().subscribe(
        res => {
            //console.log(res)
            this.populateDataRow(res)
        },
        err => console.log(err)
       );
  }

  populateDataRow(users){
    console.log(users)
    if (users) {
        this.Users = users;
        let rows = [];

        this.Users.forEach(user => {
            console.log(user)
            const newRow = [
                            user.name.toString(),
                            user.lastname.toString(), 
                            user.email.toString(), 
                            user.empresa.name.toString(), 
                            user.createdAt.toString(),
                            '',
                            user._id
                            ];
            rows.push(newRow);
        });
        this.dataTable = {
            headerRow: [ 'Nombre', 'Apellido', 'email', 'Empresa', 'Fecha', 'Actions' ],
            footerRow: [ 'Nombre', 'Apellido', 'email', 'Empresa', 'Fecha', 'Actions' ],
            dataRows: rows
         };

    } else {
        this.dataTable = {
            headerRow: [ 'Nombre', 'Apellido', 'email', 'Empresa', 'Fecha', 'Actions' ],
            footerRow: [ 'Nombre', 'Apellido', 'email', 'Empresa', 'Fecha', 'Actions' ],
            dataRows: [
                ['Airi Satou', 'Andrew Mike', 'Develop', '2013', '99,225',''],
                ['Angelica Ramos', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Ashton Cox', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Bradley Greer','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Brenden Wagner', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Brielle Williamson','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Caesar Vance','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Cedric Kelly','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Charde Marshall','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Colleen Hurst','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Yuri Berry','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round']
            ]
         };
    }
  }

  addUser = () =>
  {
    this.User = new User()
    this.activeModalComponent()
  }

  activeModalComponent = () => {
    this.activeModal = !this.activeModal;
  }

  activeDeleteModalComponent = () =>
  {
    this.activeDeleteModal = !this.activeDeleteModal;
  } 

  removeUser = (id:string) => {

    this.User = this.Users.find(C => C._id === id);
    this.activeDeleteModalComponent();
  }

  editUser = (id:string) => {
    console.log(id);
    this.User = this.Users.find(C => C._id === id);
    this.activeModalComponent();
  }

  ansDeleteUser(userId)
  {
    Swal.fire({
      title: '¿Realmente deseas elminar este usuario?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) { 
        this.deleteUserById(userId);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  deleteUserById(userId) { 
    this.userService.deleteTechnicianById(userId).subscribe({
      next: (response) => {
        Swal.fire('¡Éxito!', 'Técnico eliminado correctamente', 'success');
        //this.getAllTechniciansUpdated();
      }, error: (e) => {
        console.log(e);
      }
    })
  }

  ngAfterViewInit(){

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
      table.on( 'click', '.edit', function () {
          var $tr = $(this).closest('tr');

          var data = table.row($tr).data();
          alert( 'You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.' );
      } );

      // Delete a record
      table.on( 'click', '.remove', function (e) {
          var $tr = $(this).closest('tr');
          table.row($tr).remove().draw();
          e.preventDefault();
      } );

      //Like record
      table.on( 'click', '.like', function () {
          alert('You clicked on Like button');
      });
  }

}
