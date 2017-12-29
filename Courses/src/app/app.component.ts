import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public heading: string = "Courses Categories";

  public courses: string[] = [
    'Nursing', 'Science', 'Enginering', 'Arts', 'HealthCare', 
  ];

  public newCourse: string = "";

  public addCourse() {
    this.courses.push(this.newCourse);
    this.newCourse = '';
  }
}
