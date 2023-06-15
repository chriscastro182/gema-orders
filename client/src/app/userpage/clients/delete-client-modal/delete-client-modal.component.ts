import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'app/Models/Client.model';

@Component({
  selector: 'app-delete-client-modal',
  templateUrl: './delete-client-modal.component.html',
  styleUrls: ['./delete-client-modal.component.scss']
})
export class DeleteClientModalComponent implements OnInit {

  @Input() activeDeleteModal:           boolean;  
  @Input() activeDeleteModalComponent:  Function;
  @Input() getAllClients:               Function;
  @Input() cliente:                     Client;

  constructor() { }

  ngOnInit(): void {

    
    console.log("Cliente ya en el componente hijo ",this.cliente);
    
  }

  closeModal(e){
    this.activeDeleteModalComponent();
  }

}
