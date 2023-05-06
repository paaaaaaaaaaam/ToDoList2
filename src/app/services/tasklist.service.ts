import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {

  taskList: string[] = [];

  constructor() {
    this.loadList();
  }

  loadList() {

    if (localStorage.getItem("TaskListStorage")) {
      this.taskList = JSON.parse(localStorage.getItem("TaskListStorage") || '{}');
    }

  }

  addTask(task: string) {
    this.taskList.push(task);
    console.log(this.taskList);
    
    this.atualizarStorage();
  }

  removerTask(posicao: number) {
    this.taskList.splice(posicao, 1);
    this.atualizarStorage();
  }

  atualizarStorage() {
    localStorage.setItem("TaskListStorage", JSON.stringify(this.taskList));
    this.taskList = JSON.parse(localStorage.getItem("TaskListStorage") || '{}');
  }

}
