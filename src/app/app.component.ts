import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  userList(userList: any) {
    throw new Error('Method not implemented.');
  }
  title= 'prj1';

  

}

