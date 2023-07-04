import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  
  user:any = {}
  error: Error | null = null

  @Input() activeModal:           boolean;  
  @Input() activeModalComponent:  Function;
  @Input() userParent:   User;
  @ViewChild('closeModalUser') closeModalUser: ElementRef;


  company:Companny;
  companies:[Companny];

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

     if(this.userParent)
     {
        this.getUserById(this.userParent._id);
     }
  }

  closeModal = (e) =>{
    this.activeModalComponent();
  }

  createUser() {
    console.log('clicked')
    this.user.roles = ['6473a5efaf80c24578e13136']
    this.userService.createUser(this.user)
      .subscribe({
        next: () => {
          Swal.fire('¡Éxito!', 'Usuario Creado Correctamente', 'success');
          this.closeModalUser.nativeElement.click();
          //this.getTechniciansPopulate();
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
      }, error: (e) => {
        console.log(e);
      }
    })
  }

  updateUser() {
    this.userService.updateUserById(this.user)
      .subscribe({
        next: () => {
          Swal.fire('¡Éxito!', 'Usuario Actualizado Correctamente', 'success');
          this.closeModalUser.nativeElement.click();
          //this.getTechniciansPopulate();        
        }, error: (e) => {
          console.log(e);
        },
        complete: () => console.log('done'),
      })
  }


}
