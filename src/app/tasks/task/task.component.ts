import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './Types/task.type';



@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  
  @Output() complete = new EventEmitter<string>();

  onCompleteTaskButtonClicked(){
    this.complete.emit(this.task.id);
  }
}
