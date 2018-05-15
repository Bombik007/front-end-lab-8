import {Component} from '@angular/core';
import {ClassComponent} from '../lesson/lesson.component';
import {Class, Classes} from '../classes';
import {StorageService} from '../storage.service';

@Component({selector: 'app-schedule', templateUrl: './schedule.component.html', styleUrls: ['./schedule.component.css']})
export class ScheduleComponent {
  public classArr : Class[] = Classes;
  constructor(private storageService : StorageService) {}
  private addClass = () : void => {
    const lastAdded = this.classArr[this.classArr.length - 1]
    if (lastAdded.date.length == 0 || lastAdded.lecturer.length == 0 || lastAdded.topic.length == 0) 
      return;
    const newObj : Class = {
      id: this.classArr.length,
      topic: '',
      date: '',
      lecturer: ''
    };
    this
      .classArr
      .push(newObj);
  }
}
