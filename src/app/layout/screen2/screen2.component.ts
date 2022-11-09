import { Component, OnInit } from '@angular/core';
import { teacherReports } from '../screen1/teacher-reports';
import { teachers } from './teachers';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss']
})
export class Screen2Component implements OnInit {
  teacherReports = teacherReports;
  teachers = teachers;
  teacher = 'select';

  constructor() { }

  ngOnInit() {
  }

  openReport(id: string) {
    window.alert(id + ' opened for ' + this.teacher);
  }

  onChange($event: any) {
    let text = $event.target.options[$event.target.options.selectedIndex].text;
    this.teacher = text;
  }
}
