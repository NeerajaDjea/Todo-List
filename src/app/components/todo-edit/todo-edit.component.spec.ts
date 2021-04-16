import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Todo } from 'src/app/models/Todo';

import { TodoEditComponent } from './todo-edit.component';

describe('TodoEditComponent', () => {
  let component: TodoEditComponent;
  let fixture: ComponentFixture<TodoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoEditComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
