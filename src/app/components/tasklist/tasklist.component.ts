import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasklistService } from 'src/app/services/tasklist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  task:string = "";
  @Input() taskList: string[] = [];
  @Output() taskAdded: EventEmitter<string> = new EventEmitter();
  @Output() taskRemoved: EventEmitter<number> = new EventEmitter();

  constructor() {

  }

  addTaskToList(){

    //Emitindo o valor da task para o output do componente
    this.taskAdded.emit(this.task);
    this.task = "";
  }

  deleteTask(i:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.taskRemoved.emit(i);
      }
    })
  }

}
