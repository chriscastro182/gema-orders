import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Companny } from 'app/Models/Companny.model';
import { CompaniesService } from 'app/services/companny.service';
import Swal from 'sweetalert2';
import { ViewChild, ElementRef} from '@angular/core';
import { UsersService } from 'app/services/users.service';
import { User } from 'app/Models/User.model';


@Component({
  selector: 'app-add-users-modal',
  templateUrl: './add-users-modal.component.html',
  styleUrls: ['./add-users-modal.component.scss']
})
export class AddUsersModalComponent implements OnInit {
  
  @Output() getAllUsersUpdated = new EventEmitter()
  user:any = {}
  error: Error | null = null

  @Input() activeModal:           boolean;  
  @Input() activeModalComponent:  Function;
  @Input() userParent:            User;
  @Input() isEditModal:           boolean;
  @ViewChild('closeModalUser') closeModalUser: ElementRef;


  company:Companny;
  companies:[Companny];
  idEmpresa: any;

  constructor(
    private companyService: CompaniesService,
    private userService: UsersService
    ) { }

  async ngOnInit(){
    await this.companyService.getFamilies().subscribe(
      res => {
          console.log(res)
          this.companies = res;
          //this.populateDataRow(res)
      },
      err => console.log(err)
     );
      console.log("Bool de edit "+this.isEditModal);
      
     if(this.isEditModal)
     {
        this.getUserById(this.userParent._id);
     }
  }

  getUsersPopulate()
  {
    this.getAllUsersUpdated.emit()
  }

  closeModal = (e) =>{
    this.isEditModal = false;
    this.activeModalComponent();
  }

  createUser() {
    console.log('clicked')
    this.userService.createUser(this.user)
      .subscribe({
        next: () => {
          Swal.fire('¡Éxito!', 'Usuario Creado Correctamente', 'success');
          this.closeModalUser.nativeElement.click();
          this.getUsersPopulate();
        }, error: (e) => {
          console.log(e);
        },
        complete: () => console.log('done'),
      })
  }

  getUserById(userId) { 
    this.userService.getUserById(userId).subscribe({
      next: (response: any) => {
        this.user = response
        this.idEmpresa = response.empresa._id
        console.log(this.idEmpresa);
        
      }, error: (e) => {
        console.log(e);
      }
    })
  }

  updateUser() {
    this.user.empresa = this.idEmpresa;
    this.userService.updateUserById(this.user)
      .subscribe({
        next: () => {
          Swal.fire('¡Éxito!', 'Usuario Actualizado Correctamente', 'success');
          this.closeModalUser.nativeElement.click();
          this.getUsersPopulate();        
        }, error: (e) => {
          console.log(e);
        },
        complete: () => console.log('done'),
      })
  }

  OnDestroy(){
    
    this.isEditModal = false;
  }

}
