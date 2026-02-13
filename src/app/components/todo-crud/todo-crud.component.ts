import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo, deleteTodo, toggleTodo } from '../../actions/todo.actions';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-crud',
  standalone: true,
  templateUrl: './todo-crud.component.html',
  styleUrl: './todo-crud.component.css',
  imports: [CommonModule, FormsModule]
})
export class TodoCrudComponent {
  todos$: Observable<any> | undefined;

  constructor(private store: Store) {
    this.todos$ = this.store.select((state: any) => state.todoReducer); // Selector
  }

  deleteMyTodo(id: number) {
    this.store.dispatch(deleteTodo({ id: id }));
  }
  toggleMyTodo(id: number) {
    this.store.dispatch(toggleTodo({ id: id }));
  }

  todoText: string = '';
  addMyTodo(todoText: string) {
    //check for empty values
    if (!todoText.trim()) {
      alert("Please Enter ToDo")
      return;
    }

    let todoId: number = 0;
    //Auto Generating and adding ID to the todo Array
    this.todos$?.subscribe((todos: Todo[]) => {
      if (todos.length != 0) {
        todoId = Math.max(...todos.map(todo => todo.id)) + 1
      } else {
        todoId = 1;
      }
    })

    //create a todo object with input values
    const todo: Todo = {
      id: todoId,
      text: todoText,
      isCompleted: false
    }

    this.store.dispatch(addTodo({ payload: todo }))
    this.todoText = '';
  }

}
