import {Component, Input} from '@angular/core';
import {Class, Classes} from '../classes';
import {ScheduleComponent} from '../schedule/schedule.component';

@Component({selector: 'app-class', templateUrl: './class.component.html', styleUrls: ['./class.component.css']})
export class ClassComponent {

  @Input()class : Class;
  edit = false;
  public prev;

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

  public saveClass() : void {
    this.edit = false;
    localStorage.setItem('database', JSON.stringify(Classes));
  }

  public deleteClass() : void {
    const index: number = Classes.indexOf(this.class);
    if (index >= 0) {
      Classes.splice(index, 1);
      localStorage.setItem('database', JSON.stringify(Classes));
    }
  }
}
