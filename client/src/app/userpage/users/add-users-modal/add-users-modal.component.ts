import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-users-modal',
  templateUrl: './add-users-modal.component.html',
  styleUrls: ['./add-users-modal.component.scss']
})
export class AddUsersModalComponent implements OnInit {
  
  @Input() activeModal:           boolean;  
  @Input() activeModalComponent:  Function;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal = (e) =>{
    this.activeModalComponent();
  }

}
