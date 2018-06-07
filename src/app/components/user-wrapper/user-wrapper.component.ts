import { UserServiceService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-wrapper',
  templateUrl: './user-wrapper.component.html',
  styleUrls: ['./user-wrapper.component.css']
})
export class UserWrapperComponent implements OnInit {


  users: any[];
  p: number = 1;
  constructor( private userSvc : UserServiceService ) { }

  ngOnInit() {
    this.users = this.userSvc.getUsers();
  }

}
