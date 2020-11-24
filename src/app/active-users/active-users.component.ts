import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private usrServ: UsersService) {}
  ngOnInit() {
    this.users = this.usrServ.activeUsers;
  }
  onSetToInactive(id: number) {
    this.usrServ.setToInactive(id);
  }
}
