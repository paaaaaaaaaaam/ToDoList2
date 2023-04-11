import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';
  todos =[
   {
    label: 'Item 1',
    done: false,
    priority: 3
   },
   {
    label: 'Item 2',
    done: true,
    priority: 1
   }, {
    label: 'Item 3',
    done: false,
    priority: 4
   }, {
    label: 'Item 4',
    done: false,
    priority: 5
   },
  ];

  addTodo(newTodoLabel: any) {
    var NewTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(NewTodo);
  }

  deleteTodo(todo: { label: string; }) {
    this.todos = this.todos.filter(t => t.label !== todo.label);
  }
}
