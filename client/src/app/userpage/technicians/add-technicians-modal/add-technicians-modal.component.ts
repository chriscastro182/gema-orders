import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-technicians-modal',
  templateUrl: './add-technicians-modal.component.html',
  styleUrls: ['./add-technicians-modal.component.scss']
})
export class AddTechniciansModalComponent implements OnInit {

  @Input() activeModal:           boolean;  
  @Input() activeModalComponent:  Function;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal = (e) =>{
    this.activeModalComponent();
  }


}
