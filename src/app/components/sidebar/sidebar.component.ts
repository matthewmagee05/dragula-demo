import { UserServiceService } from './../../services/user-service.service';
import { RoomServiceService } from './../../services/room-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  rooms;
  users;
  buildings;
  batch;
  location;

  constructor(
    private roomService:RoomServiceService,
    private userService: UserServiceService) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
    this.users = this.userService.getUsers();
    this.buildings = this.rooms.map(item => item.building).filter((value, index, self) => self.indexOf(value) === index);
    this.batch = this.users.map(item => item.batch).filter((value, index, self) => self.indexOf(value) === index);
    this.location = this.rooms.map(item => item.location).filter((value, index, self) => self.indexOf(value) === index);
  }


}
