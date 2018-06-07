import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserRoomWrapperComponent } from './components/user-room-wrapper/user-room-wrapper.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { RoomCardComponent } from './components/room-card/room-card.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserWrapperComponent } from './components/user-wrapper/user-wrapper.component';
import { RoomWrapperComponent } from './components/room-wrapper/room-wrapper.component';
import { MatSelectModule, MatCheckboxModule, MatExpansionModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgPipesModule} from 'ngx-pipes';
import { DragulaModule } from 'ng2-dragula';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    UserRoomWrapperComponent,
    UserCardComponent,
    RoomCardComponent,
    UserWrapperComponent,
    RoomWrapperComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    MatSelectModule,
    BrowserAnimationsModule,
    NgPipesModule,
    MatCheckboxModule,
    MatExpansionModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
