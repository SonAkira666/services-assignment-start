import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private usrServ: UsersService) {}
  ngOnInit() {
    this.users = this.usrServ.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.usrServ.setToActive(id);
  }
}
