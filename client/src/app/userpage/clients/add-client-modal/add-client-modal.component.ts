import { Component, OnInit, Input } from '@angular/core';
import { ClientsService } from 'app/services/clients.service';
import { Client } from 'app/Models/Client.model';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-client-modal',
  templateUrl: './add-client-modal.component.html',
  styleUrls: ['./add-client-modal.component.scss']
})
export class AddClientModalComponent implements OnInit {
  client_id: string;
  client: any = {}
  error: Error | null = null;

  @Input() activeModal: boolean;
  @Input() activeModalComponent: Function;
  @Input() cliente:     Client;

 
  constructor(private ClientesService: ClientsService) { }

  editFormClient = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
  })


  ngOnInit(): void {
    if(this.cliente)
    {
      this.getClientById(this.cliente._id);
    }
  }

  closeModal = (e) => {
    this.activeModalComponent();
  }

  createClient() {
    const location = { type: "Point", coordinates: ['10', '120'] }
    this.client.location = location;
    this.ClientesService.createClient(this.client)
      .subscribe({
        next: () => {
          console.log('inserted')
        }, error: (e) => {
          console.log(e);
        },
        complete: () => console.log('done'),
      })
  }

  getClientById(clientId) { 
    this.client_id = clientId;
    this.ClientesService.getClientById(clientId).subscribe({
      next: (response: any) => {
        console.log(response.name);
        this.client = response
      }, error: (e) => {
        console.log(e);
      }
    })
  }

  updateClient() {
    const location = { type: "Point", coordinates: ['10', '120'] }
    this.client.location = location;
    this.ClientesService.updateClient(this.client)
      .subscribe({
        next: () => {
          console.log('updated')
        }, error: (e) => {
          console.log(e);
        },
        complete: () => console.log('done'),
      })
  }
}
