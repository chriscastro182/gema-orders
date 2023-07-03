import { Component, OnInit } from '@angular/core';
import { Technician } from 'app/Models/Technician.model';
import { TechniciansService } from 'app/services/technicians.service';
import Swal from 'sweetalert2';
declare var $:any;

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-technicians',
  templateUrl: './technicians.component.html',
  styleUrls: ['./technicians.component.scss']
})

export class TechniciansComponent implements OnInit {

  Technicians: [Technician]
  constructor(private technicianService: TechniciansService) { }

  public dataTable: DataTable;
  activeModal:Boolean = false;
  activeDeleteModal:Boolean = false;
  Technician:Technician = new Technician();

  async ngOnInit(){
    await this.technicianService.getTechnicians().subscribe(
      res => {
        console.log(res)
        this.populateDataRow(res)
      },
      err => console.log(err)
    );

  }

  populateDataRow(technicians) {
    if (technicians) {
      this.Technicians = technicians;
      let rows = [];
 
      this.Technicians.forEach(user => {
        const newRow = [
          user.numemployee.toString(),
          user.phone.toString(),
          user.user.toString(),
          user.createdAt.toString(),
          '',
          user._id
        ];
        rows.push(newRow);
      });
      this.dataTable = {
        headerRow: ['Número de Empleado', 'Teléfono', 'Usuario', 'Fecha Creación', 'Acciones'],
        footerRow: ['Número de Empleado', 'Teléfono', 'Usuario', 'Fecha Creación', 'Acciones'],
        dataRows: rows
      };

    } else {
      this.dataTable = {
        headerRow: ['Número de Empleado', 'Teléfono', 'Usuario', 'Fecha Creación', 'Acciones'],
        footerRow: ['Número de Empleado', 'Teléfono', 'Usuario', 'Fecha Creación', 'Acciones'],
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


  async getAllTechniciansUpdated(){
    await this.technicianService.getTechnicians().subscribe(
      res => {
        this.updateDatatableTechnicians(res)
      },
      err => console.log(err)
    );
  }

  updateDatatableTechnicians(technicians) {

    this.dataTable.dataRows = [];
    this.dataTable.footerRow = [];
    this.dataTable.headerRow = [];

    if (technicians) {
      this.Technicians = technicians;
      let rows = [];
 
      this.Technicians.forEach(user => {
        const newRow = [
          user.numemployee.toString(),
          user.phone.toString(),
          user.user.toString(),
          user.createdAt.toString(),
          '',
          user._id
        ];
        rows.push(newRow);
      });
      this.dataTable = {
        headerRow: ['Número de Empleado', 'Teléfono', 'Usuario', 'Fecha Creación', 'Acciones'],
        footerRow: ['Número de Empleado', 'Teléfono', 'Usuario', 'Fecha Creación', 'Acciones'],
        dataRows: rows
      };

    } else {
      this.dataTable = {
        headerRow: ['Número de Empleado', 'Teléfono', 'Usuario', 'Fecha Creación', 'Acciones'],
        footerRow: ['Número de Empleado', 'Teléfono', 'Usuario', 'Fecha Creación', 'Acciones'],
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

  addTechnician = () => {
    this.Technician = new Technician();
    this.activeModalComponent();
  }

  activeModalComponent = () => {
    console.log(this.activeModal);
    this.activeModal = !this.activeModal;
  }

  activeDeleteModalComponent = () => {
    this.activeDeleteModal = !this.activeDeleteModal;
  }

  removeTechnician = (id:string) => {
    this.Technician = this.Technicians.find(C => C._id === id);
    this.activeDeleteModalComponent();
  }

  editTechnician = (id:string) => {
    this.Technician = this.Technicians.find(C => C._id === id);
    this.activeModalComponent();
  }

  deleteTechnicianById(technicianId) { 
    this.technicianService.deleteTechnicianById(technicianId).subscribe({
      next: (response) => {
        Swal.fire('¡Éxito!', 'Técnico eliminado correctamente', 'success');
        this.getAllTechniciansUpdated();
      }, error: (e) => {
        console.log(e);
      }
    })
  }

  ansDeleteClient(technicianId)
  {
    Swal.fire({
      title: '¿Realmente deseas elminar este técnico?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) { 
        this.deleteTechnicianById(technicianId);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
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
