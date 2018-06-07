import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  rooms = [
    {
      location: "Tampa, FL",
      building: "Bellarmine",
      roomNumber: "104",
      roomNumbers: [
        "104A", "104B", "104C", "104D"
      ],
      userID: [
        1234, 7777
      ],
      gender: "Male"
    },
    {
      location: "Tampa, FL",
      building: "Livingston",
      roomNumber: "166",
      roomNumbers: [
        "166A", "166B", "166C", "166D"
      ],
      userID: [
        1112, 1113, 1114
      ],
      gender: "Male"
    },
    {
      location: "Tampa, FL",
      building: "Livingston",
      roomNumber: "1006",
      roomNumbers: [
        "1006A", "1006B", "1006C", "1006D"
      ],
      userID: [
        9999
      ],
      gender: "Female"
    },
    {
      location: "Tampa, FL",
      building: "Social",
      roomNumber: "214",
      roomNumbers: [
        "214A", "214B", "214C", "214D"
      ],
      userID: [
        3230
      ],
      gender: "Male"
    },
    {
      location: "Reston, VA",
      building: "Virginias",
      roomNumber: "908",
      roomNumbers: [
        "908A", "908B", "908C", "908D"
      ],
      userID: [
        8888, 8889
      ],
      gender: "Female"
    },
    {
      location: "Reston, VA",
      building: "Haunted Apts.",
      roomNumber: "666",
      roomNumbers: [
        "666"
      ],
      userID: [],
      gender: null
    },
    {
      location: "Tampa, FL",
      building: "Social",
      roomNumber: "100",
      roomNumbers: [
        "100A", "100B", "100C", "100D"
      ],
      userID: [
        1234, 1112
      ],
      gender: "Male"
    },
    {
      location: "Tampa, FL",
      building: "Social",
      roomNumber: "266",
      roomNumbers: [
        "266A", "266B", "266C", "266D"
      ],
      userID: [

      ],
      gender: "Unassigned"
    }
  ]
  constructor() {

  }

  // calculateTotalRooms(roomNumber, location) {
  //   this.rooms.forEach(room => {
  //     if (room.roomNumber === roomNumber && room.location === location) {
  //       console.log("CalculateTotalRooms" + (room.roomNumbers.length));
  //       return room.roomNumbers.length;
  //     }
  //   });
  // }

  // calculateRemainingRooms(roomNumber, location) {
  //   this.rooms.forEach(room => {
  //     if (room.roomNumber === roomNumber && room.location === location) {
  //       console.log("CalculateReaminigRooms" + (room.roomNumbers.length - room.userID.length));
  //       return room.roomNumbers.length - room.userID.length;
  //     }
  //   });
  // }

  getRooms() {

    // this.rooms.forEach(room => {
    //   let AROOM = this.calculateRemainingRooms(room.roomNumber, room.location)
    //   console.log(AROOM);
    //   debugger;

    //   room.remainingRooms = this.calculateRemainingRooms(room.roomNumber, room.location);

    //   room.totalRooms = this.calculateTotalRooms(room.roomNumber, room.location);
    //   console.log(room.remainingRooms);
    // });
    return this.rooms;
  }

  getRoomsByLocation(location : string) : any[] {
    return this.rooms.filter(room => room.location === location);
  }
}
