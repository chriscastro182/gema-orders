import { Component, OnInit, Input } from '@angular/core';
import { User } from 'app/Models/User.model';

@Component({
  selector: 'app-delete-users-modal',
  templateUrl: './delete-users-modal.component.html',
  styleUrls: ['./delete-users-modal.component.scss']
})
export class DeleteUsersModalComponent implements OnInit {

  @Input() activeDeleteModal: Boolean;
  @Input() activeDeleteModalComponent: Function;
  @Input() user:User;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(e) {
    this.activeDeleteModalComponent();
  }

}
