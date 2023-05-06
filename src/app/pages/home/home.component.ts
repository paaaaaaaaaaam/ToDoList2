import { Component } from '@angular/core';
import { TasklistService } from 'src/app/services/tasklist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public taskListService: TasklistService) {

  }

  onTaskAdded(task: string) {

    //alert('Task recebida do componente: ' + task);
    this.taskListService.addTask(task);

  }

  onTaskRemoved(index: number) {
    this.taskListService.removerTask(index);
  }


}

