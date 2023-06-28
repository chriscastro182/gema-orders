import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClientsService } from 'app/services/clients.service';
import { Client } from 'app/Models/Client.model';
import Swal from 'sweetalert2';
import { ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-add-client-modal',
  templateUrl: './add-client-modal.component.html',
  styleUrls: ['./add-client-modal.component.scss']
})
export class AddClientModalComponent implements OnInit {

  @Output() testEvent = new EventEmitter()
  client_id: string;
  client: any = {}
  error: Error | null = null;

  @Input() activeModal:           boolean;
  @Input() activeModalComponent: Function;
  @Input() cliente:                Client;
  @Input() populateDataRow:      Function;
  @Input() getAllClients:        Function;
  @ViewChild('closeModalClient') closeModalClient: ElementRef;

 
  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    console.log(this.cliente) 
    if(this.cliente)
    {
      this.getClientById(this.cliente._id);
    }
  }
  
  getClientsPopulate() {
    this.testEvent.emit();
  }

  closeModal = () => {
    this.activeModalComponent();
  }

  createClient() {
    const location = { type: "Point", coordinates: ['10', '120'] }
    this.client.location = location;
    this.clientService.createClient(this.client)
      .subscribe({
        next: () => {
          Swal.fire('¡Éxito!', 'Usuario Creado Correctamente', 'success');
          this.closeModalClient.nativeElement.click();
          this.getClientsPopulate();
        }, error: (e) => {
          console.log(e);
        },
        complete: () => console.log('done'),
      })
  }

  getClientById(clientId) { 
    this.client_id = clientId;
    this.clientService.getClientById(clientId).subscribe({
      next: (response: any) => {
        this.client = response
      }, error: (e) => {
        console.log(e);
      }
    })
  }

  updateClient() {
    const location = { type: "Point", coordinates: ['10', '120'] }
    this.client.location = location;
    this.clientService.updateClient(this.client)
      .subscribe({
        next: () => {
          Swal.fire('¡Éxito!', 'Usuario Actualizado Correctamente', 'success');
          this.closeModalClient.nativeElement.click();
          this.getClientsPopulate();        
        }, error: (e) => {
          console.log(e);
        },
        complete: () => console.log('done'),
      })
  }
}
