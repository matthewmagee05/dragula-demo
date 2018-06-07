import { RoomServiceService } from './../../services/room-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-wrapper',
  templateUrl: './room-wrapper.component.html',
  styleUrls: ['./room-wrapper.component.css']
})
export class RoomWrapperComponent implements OnInit {

  rooms: any[];
  users: any[];
  test_locations : string[] = [
    'Tampa, FL', 'Reston, VA', 'New York City, NY'
  ];
  test_rooms : any[];

  p: number = 1;
  constructor(private roomService: RoomServiceService) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
    this.test_locations = this.rooms.map(item => item.location).filter((value, index, self) => self.indexOf(value) === index);

    this.test_rooms = [];
    this.test_locations.forEach((location) => {
      this.test_rooms.push(this.roomService.getRoomsByLocation(location));
    });

    // this.test_rooms.forEach(element => {
    //   console.log("LOOOK HERE "+ element);
    // });

  }
}
