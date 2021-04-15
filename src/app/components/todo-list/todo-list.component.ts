import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Todo } from '../../models/Todo'



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [ './todo-list.component.scss' ],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate(1000, style({ opacity: 1, transform: 'translateY(0px)' }))

      ]),
      transition(':leave', [ animate(1000, style({ opacity: 0, transform: 'translateY(30px)' }))


      ]),
    ])
  ]
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  todoTitle: string;
  idForTodo: number;
  filter: string;
  selectedTodo: Todo = new Todo;
  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedTodo)
    this.filter = 'all';
    this.idForTodo = 4;
    this.todoTitle = '';
    this.todos = [
      {
        id: 1,
        title: 'First todo',
        completed: false,

      },
      {
        id: 2,
        title: 'Second Todo',
        completed: false,

      },
      {
        id: 3,
        title: 'Third Todo',
        completed: false,

      },
    ];
  }
  // method to add to the list
  addTodo(): void {
    this.todos.push({
      id: this.idForTodo,
      title: this.todoTitle,
      completed: false,

    })
    this.todoTitle = '';
    this.idForTodo++;

  }

  // remove the todo from the list by passing in the id
  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id)

  }

  // methods to calculate the completed tasks
  remainingTodo(): number {
    return this.todos.filter(todo => !todo.completed).length
  }
  anyCompleted(): boolean {
    return this.todos.filter(todo => todo.completed).length > 0
  }
  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed)
  }
  todoCompleted(): void {
    this.todos = this.todos.filter(todo => todo.completed)
  }
  allTodo(): void {
    return this.todos.forEach(todo => {
      this.todoCompleted

    });
  }
  editTodo(todo: Todo) {
    this.selectedTodo = todo

  }
  sendTodoToListEventHandler(todo: Todo) {
    console.log(this.selectedTodo)
    console.log(todo.title)
    this.todos.forEach(() => {
      if (this.selectedTodo)
      {
        this.selectedTodo.title = todo.title;
      }


      this.selectedTodo = null;
    })
  }

}

