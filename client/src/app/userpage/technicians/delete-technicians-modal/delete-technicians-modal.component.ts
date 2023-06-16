import { Component, OnInit, Input } from '@angular/core';
import { Technician } from 'app/Models/Technician.model';

@Component({
  selector: 'app-delete-technicians-modal',
  templateUrl: './delete-technicians-modal.component.html',
  styleUrls: ['./delete-technicians-modal.component.scss']
})
export class DeleteTechniciansModalComponent implements OnInit {

  @Input() activeDeleteModal:           boolean;  
  @Input() activeDeleteModalComponent:  Function;
  @Input() technician:                  Technician;

  constructor() { }

  ngOnInit(): void {
  }

  
  closeModal(e){
    this.activeDeleteModalComponent();
  }

}
