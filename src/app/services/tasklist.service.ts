import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {

  taskList: string[] = [];

  constructor() {
    this.taskList = JSON.parse(localStorage.getItem("TaskListStorage") || '{}');
  }

  getList() {

    return JSON.parse(localStorage.getItem("TaskListStorage") || '{}');

  }

  addTask(task: string) {
    this.taskList.push(task);
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
