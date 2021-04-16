import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add a new todo task', () => {
    const newTodo = " new task";
    component.addTodo()
    expect(component.todos.length).toBeGreaterThanOrEqual(4);
  });

  it('should delete task', () => {

    component.deleteTodo(1)
    expect(component.todos.length).toBeLessThan(3);
  });

  it('update task', () => {

    component.remainingTodo()
    expect(component.todos.length).toBe(3);
  });



});
