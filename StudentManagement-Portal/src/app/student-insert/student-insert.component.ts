import { Component, OnInit } from '@angular/core';
import {Student} from '../student.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-student-insert',
  templateUrl: './student-insert.component.html',
  styleUrls: ['./student-insert.component.css']
})
export class StudentInsertComponent implements OnInit {
  user:Student=new Student();
  studentinsertForm: FormGroup;
    submitted = false; 


  constructor(private formBuilder: FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
  
  this.studentinsertForm = this.formBuilder.group({
    
    studentName: ['', Validators.required],

    studentMobileNo:['', [Validators.required, Validators.minLength(10)]],
    studentEmail: ['', [Validators.required, Validators.email]], 

  
    studentCource: ['', Validators.required],
    studentFees: ['', Validators.required]

});

 }

 insertData()
 {
  this.submitted = true;
  
  if (this.studentinsertForm.invalid) {
      return;
     
  }
    
 
    this.http.post('https://localhost:44382/api/Student',
    {
      StudentName:this.studentinsertForm.value.studentName,
      StudentMobileNo:this.studentinsertForm.value.studentMobileNo,
      StudentEmailId:this.studentinsertForm.value.studentEmail,
      StudentCource:this.studentinsertForm.value.studentCource,
      StudentFees:this.studentinsertForm.value.studentFees 
    }).subscribe(res => { 
      console.log(res);
    });
   
    this.studentinsertForm.reset;
    alert("Data Inserted Successfully..");
    this.studentinsertForm.reset();
    console.log(this.studentinsertForm.value);
 }
}
