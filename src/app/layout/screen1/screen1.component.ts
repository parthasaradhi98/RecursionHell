import { Component, OnInit } from '@angular/core';
import { teacherReports } from './teacher-reports';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {
  teacherReports = teacherReports;

  constructor() { }

  ngOnInit() {
  }

  openReport(id: string) {
    window.alert(id + ' opened');
  }

  uploadReport() {
    window.alert('upload a video');
  }
}
