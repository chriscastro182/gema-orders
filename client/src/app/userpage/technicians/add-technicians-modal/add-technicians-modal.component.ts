import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Companny } from 'app/Models/Companny.model';
import { CompaniesService } from 'app/services/companny.service';
import { User } from 'app/Models/User.model';
import { UsersService } from 'app/services/users.service';
import { TechniciansService } from 'app/services/technicians.service';
import Swal from 'sweetalert2';
import { ViewChild, ElementRef} from '@angular/core';
import { Technician } from 'app/Models/Technician.model';

@Component({
  selector: 'app-add-technicians-modal',
  templateUrl: './add-technicians-modal.component.html',
  styleUrls: ['./add-technicians-modal.component.scss']
})
export class AddTechniciansModalComponent implements OnInit {

  @Output() getAllTechnicians = new EventEmitter()
  technicianId: string;
  technician: any = {}
  error: Error | null = null;

  @Input() activeModal:           boolean;
  @Input() activeModalComponent: Function;
  @Input() technicianParent:   Technician;
  @Input() isEditModal:           boolean;
  @ViewChild('closeModalTechnician') closeModalTechnician: ElementRef;

  company: Companny;
  companies: [Companny];
  users: [User];

  constructor(
    private technicianService: TechniciansService,
    private companyService: CompaniesService,
    private userService: UsersService
  ) { }

  async ngOnInit() {
    
    await this.userService.getUsers().subscribe(
      res => {
        this.users = res;
      },
      err => console.log(err)
    );

    this.isEditModal ? this.getTechnicianById(this.technicianParent._id) : null;

  }

  getTechniciansPopulate() {
    this.getAllTechnicians.emit();
  }

  closeModal = () => {
    this.activeModalComponent();
  }

  createTechnician() {
    console.log('clicked')
    this.technicianService.createTechnician(this.technician)
      .subscribe({
        next: () => {
          Swal.fire('¡Éxito!', 'Técnico Creado Correctamente', 'success');
          this.closeModalTechnician.nativeElement.click();
          this.getTechniciansPopulate();
        }, error: (e) => {
          console.log(e);
        },
        complete: () => console.log('done'),
      })
  }

  getTechnicianById(technicianId) { 
    this.technicianId = technicianId;
    console.log("technician ID: "+ technicianId);
    
    this.technicianService.getTechnicianById(technicianId).subscribe({
      next: (response: any) => {
        this.technician = response
      }, error: (e) => {
        console.log(e);
      }
    })
  }

  updateTechnician() {
    this.technicianService.updateTechnicianById(this.technician)
      .subscribe({
        next: () => {
          Swal.fire('¡Éxito!', 'Usuario Actualizado Correctamente', 'success');
          this.closeModalTechnician.nativeElement.click();
          this.getTechniciansPopulate();        
        }, error: (e) => {
          console.log(e);
        },
        complete: () => console.log('done'),
      })
  }

}
