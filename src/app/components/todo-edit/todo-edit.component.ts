import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';
import { NgForm } from '@angular/forms';
import { formatCurrency } from '@angular/common';




@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: [ './todo-edit.component.scss' ]
})
export class TodoEditComponent implements OnInit {
  // assign variable to new todo object
  @Input() selectedTodo: Todo = new Todo();

  // event to send the updated todo

  @Output() sendTodoToListEvent: EventEmitter<NgForm> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  // get the form and emit the new todo object
  updateTodo(todoForm: NgForm) {
    this.sendTodoToListEvent.emit(todoForm.value);


  }

}

