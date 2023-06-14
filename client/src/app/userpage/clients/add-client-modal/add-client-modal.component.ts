import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-client-modal',
  templateUrl: './add-client-modal.component.html',
  styleUrls: ['./add-client-modal.component.scss']
})
export class AddClientModalComponent implements OnInit {

  @Input() activeModal:           boolean;  
  @Input() activeModalComponent:  Function;

  constructor() { }

  ngOnInit(): void {
  }
  closeModal = (e) =>{
    this.activeModalComponent();
  }

}
