import { Component } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  task:string = "";
  taskList:string[] = [];
  
  addTaskToList(){
    this.taskList.push(this.task);
    this.task = "";
  }
}
