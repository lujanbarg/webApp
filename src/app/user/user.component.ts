import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Output() userVM = new EventEmitter<User>();
  @Input() UserUpdate={};

  public NewUser:User={name:'',age:0,email:'',password:''};

  constructor() { }

  ngOnInit(): void {
  }
  addUser(form:NgForm){
    if(!form.form.valid){
      form.form.markAllAsTouched();
    }
    else 
    this.userVM.emit(this.NewUser);
  }

}
