import { Component, OnInit, Input } from '@angular/core';
import {UserServiceService} from './../../services/user-service.service';
import{RoomServiceService} from './../../services/room-service.service';


@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  @Input()
  room;

  users: any[];
  RoomNumber;


  constructor(private userService: UserServiceService, roomService: RoomServiceService) { }

  ngOnInit() {
    console.log(this.room);
    this.users = this.userService.getUsers();

  }

}
