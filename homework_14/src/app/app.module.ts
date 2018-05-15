import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ClassComponent} from './class/class.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {StorageService} from './storage.service';
@NgModule({
  declarations: [
    AppComponent, ClassComponent, ScheduleComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}