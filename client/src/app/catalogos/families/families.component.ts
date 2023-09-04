import { Component, OnInit } from '@angular/core';
import { Family, FamilyCard } from 'app/Models/Family.model';
import { AuthService } from 'app/services/auth.service';
import { FamiliesService } from 'app/services/families.service';

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-families',
  templateUrl: './families.component.html',
  styleUrls: ['./families.component.scss']
})
export class FamiliesComponent implements OnInit {

  Families=[];   
  FamilyRow=[];

  constructor(public _familiesService: FamiliesService, private _authService: AuthService) { }

  ngOnInit(): void {
    this.getFamilies();
  }

  async getFamilies(){
    await this._familiesService.getFamilies().subscribe(
      res=> {
          let actualRow = [];
          let globalRow = [];
          for (let i = 0; i < res.length; i++) {
            actualRow.push(res[i]);

            if (actualRow.length ===3 || i === res.length -1) {
              globalRow.push(actualRow)
              actualRow = []
            }            
          }
          console.log(globalRow);
          this.FamilyRow = globalRow;
      },
      err => {
        console.log(err.status)
        this._authService.getSessionBehavior(err.status)
      }
    )
  }

}
