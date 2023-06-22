import { Component, OnInit, Input } from '@angular/core';
import { Companny } from 'app/Models/Companny.model';
import { CompaniesService } from 'app/services/companny.service';

@Component({
  selector: 'app-add-users-modal',
  templateUrl: './add-users-modal.component.html',
  styleUrls: ['./add-users-modal.component.scss']
})
export class AddUsersModalComponent implements OnInit {
  
  @Input() activeModal:           boolean;  
  @Input() activeModalComponent:  Function;

  company:Companny;
  companies:[Companny];

  constructor(private companyService: CompaniesService) { }

  async ngOnInit(){
    await this.companyService.getFamilies().subscribe(
      res => {
          console.log(res)
          this.companies = res;
          //this.populateDataRow(res)
      },
      err => console.log(err)
     );
  }

  closeModal = (e) =>{
    this.activeModalComponent();
  }
}
