import { RoomServiceService } from './../../services/room-service.service';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';


@Component({
  selector: 'app-user-room-wrapper',
  templateUrl: './user-room-wrapper.component.html',
  styleUrls: ['./user-room-wrapper.component.css']
})
export class UserRoomWrapperComponent implements OnInit {

  rooms: any[];
  users: any[];
  locations: any[];
  p: number = 1;
  constructor(private roomService: RoomServiceService, private userSvc : UserServiceService ) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
    this.users = this.userSvc.getUsers();

    this.rooms.forEach((room) => {
      if (!this.locations.find(room.location)) {
        this.locations.push(room);
      }
    });
  }



}
