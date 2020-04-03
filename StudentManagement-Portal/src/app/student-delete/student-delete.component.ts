import { Component, OnInit } from '@angular/core';
import {Student} from '../student.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {
  user:Student=new Student();
  studentdeleteForm: FormGroup;
    submitted = false; 

  constructor(private formBuilder: FormBuilder,private http:HttpClient) { }

  ngOnInit() {
    this.studentdeleteForm = this.formBuilder.group({
    
      studentId: ['', Validators.required]
    });
  }
  deleteData()
  {
   this.submitted = true;
   
   if (this.studentdeleteForm.invalid) {
       return;
 
   }
  this.http.delete('https://localhost:44382/api/Student',
  {
   //StudentId:this.studentdeleteForm.value.studentId
   
  }).subscribe(res => { 
    console.log(res);
  });
  alert("Data deleted Successfully..");
  this.studentdeleteForm.reset();

  

   console.log(this.studentdeleteForm.value);
  }

}

