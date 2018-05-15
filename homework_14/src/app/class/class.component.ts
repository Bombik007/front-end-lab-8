import {Component, Input} from '@angular/core';
import {Class, Classes} from '../classes';
import {ScheduleComponent} from '../schedule/schedule.component';

import {StorageService} from '../storage.service';

@Component({selector: 'app-class', templateUrl: './class.component.html', styleUrls: ['./class.component.css']})
export class ClassComponent {
  constructor(private storageService : StorageService) {}
  @Input()class : Class;
  edit = false;
  inputError = false;
  public prev;
  topicPlaceholder = "Topic";
  datePlaceholder = "Date";
  lecturerPlaceholder = "Lecturer";
  style_class;

  public editClass() : void {
    this.edit = true;
    this.prev = {
      ...this.class
    };
  }

  public discardChanges() : void {
    this.edit = false;
    this.class = {
      ...this.prev
    };
  }

  public saveClass() : string {
    const reg = /([12]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01]))/;
    if (this.class.topic.length == 0) {
      this.class.topic = '';
      this.style_class = "warning_message";
      this.topicPlaceholder = "Enter a valid topic";
      return;
    }
    if (!this.class.date.match(reg)) {
      this.class.date = '';
      this.datePlaceholder = "YYYY/MM/DD";
      this.style_class = "warning_message";
      return;
    }
    if (this.class.lecturer.length == 0) {
      this.class.lecturer = '';
      this.lecturerPlaceholder = "Enter lecturer's name";
      this.style_class = "warning_message";
      return;
    }

    this.topicPlaceholder = "Topic";
    this.datePlaceholder = "Date";
    this.lecturerPlaceholder = "Lecturer";
    this.style_class = null;
    this.edit = false;
    this
      .storageService
      .set('database', Classes);
  }

  public deleteClass() : void {
    const index: number = Classes.indexOf(this.class);
    if (index >= 0) {
      Classes.splice(index, 1);
      this
        .storageService
        .set('database', Classes);
    }
  }
}
