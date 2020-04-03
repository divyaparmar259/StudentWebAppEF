import { Component, OnInit } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';

//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private httpServices: HttpClient) { }
  students:string[];

  ngOnInit(): void {
    this.httpServices.get('https://localhost:44382/api/Student').subscribe(
      data => {
         this.students = data as string[];
        }
        );
  }

}

//https://localhost:44377/Student

// https://localhost:44382/api/Student --postApi