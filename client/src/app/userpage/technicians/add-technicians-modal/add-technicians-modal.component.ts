import { Component, OnInit, Input } from '@angular/core';
import { Companny } from 'app/Models/Companny.model';
import { CompaniesService } from 'app/services/companny.service';

import { User } from 'app/Models/User.model';
import { UsersService } from 'app/services/users.service';

@Component({
  selector: 'app-add-technicians-modal',
  templateUrl: './add-technicians-modal.component.html',
  styleUrls: ['./add-technicians-modal.component.scss']
})
export class AddTechniciansModalComponent implements OnInit {

  @Input() activeModal: boolean;
  @Input() activeModalComponent: Function;

  company: Companny;
  companies: [Companny];

  users: [User];

  constructor(
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
  }

  closeModal = (e) => {
    this.activeModalComponent();
  }


}
