import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-home-technologies',
  templateUrl: './home-technologies.component.html',
  styleUrls: ['./home-technologies.component.scss']
})
export class HomeTechnologiesComponent implements OnInit {

  techList: any[];

  constructor() { }


  ngOnInit(): void {
    this.techList = [
      { name: 'C#', imgUri: '../../assets/img/' + 'csharp.png' },
      { name: 'HTML', imgUri: '../../assets/img/' + 'html.png' },
      { name: 'CSS', imgUri: '../../assets/img/' + 'css.jpg' },
      { name: 'IBM DB2', imgUri: '../../assets/img/' + 'db2.png' },
      { name: 'Django', imgUri: '../../assets/img/' + 'django.png' },
      { name: 'Angular', imgUri: '../../assets/img/' + 'angular.png' },
      { name: 'Apache Haddop', imgUri: '../../assets/img/' + 'hadoop.png' },
      { name: 'Javascript', imgUri: '../../assets/img/' + 'javascript.png' },
      { name: 'JQuery', imgUri: '../../assets/img/' + 'jquery.gif' },
      { name: 'MongoDB', imgUri: '../../assets/img/' + 'mongo.jpg' },
      { name: 'NodeJS', imgUri: '../../assets/img/' + 'nodejs.jpg' },
      { name: 'PostgreSQL', imgUri: '../../assets/img/' + 'postgres.png' },
      { name: 'Python', imgUri: '../../assets/img/' + 'python.png' },
      { name: 'ReactJS', imgUri: '../../assets/img/' + 'react.JPG' },
      { name: 'Apache Spark', imgUri: '../../assets/img/' + 'spark.png' },
    ]    
  }

}
