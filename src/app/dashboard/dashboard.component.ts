import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
currentTodo : string;
todoList = [];
userTodo :string;
isEdit = false;
isIndex;
isAddButton = true;
todoForm : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.todoForm = this.fb.group({
      'userData' : [null, Validators.required]
    })
  }

  add(value : string){
    this.currentTodo = value;
    this.todoList.push(value);
    console.log('value',value)
    console.log(this.todoList);
    this.userTodo = "";
  }

  edit(value,index){
    this.isAddButton = false;
    this.isEdit = true;
    console.log(value);
    this.isIndex = index;
    
    
    this.userTodo = value;
    
  }
update(){
  this.isAddButton = true;
  this.todoList[this.isIndex] = this.userTodo
  console.log(this.todoList);
  this.isIndex = null;
  this.userTodo = "";
  this.isEdit = false;
  
}

deleteTodo(index){
this.todoList.splice(index,1)

}


}

