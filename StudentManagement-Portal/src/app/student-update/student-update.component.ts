import { Component, OnInit } from '@angular/core';
import {Student} from '../student.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  user:Student=new Student();
  studentupdateForm: FormGroup;
    submitted = false; 

  constructor(private formBuilder: FormBuilder,private http:HttpClient) { }

  ngOnInit() {
    this.studentupdateForm = this.formBuilder.group({
    
      studentId: ['', Validators.required],
      studentName: ['', Validators.required],
  
      studentMobileNo:['', [Validators.required, Validators.minLength(10)]],
      studentEmail: ['', [Validators.required, Validators.email]], 
  
    
      studentCource: ['', Validators.required],
      studentFees: ['', Validators.required]
  
  });
  }
  updateData(formBuilder = this.studentupdateForm)
  {
   this.submitted = true;
   
   if (this.studentupdateForm.invalid) {
       return;
 
       
   }
   this.http.put('https://localhost:44382/api/Student',
    {
      studentId:this.studentupdateForm.value.studentId,
      StudentName:this.studentupdateForm.value.studentName,
      StudentMobileNo:this.studentupdateForm.value.studentMobileNo,
      StudentEmailId:this.studentupdateForm.value.studentEmail,
      StudentCource:this.studentupdateForm.value.studentCource,
      StudentFees:this.studentupdateForm.value.studentFees 
    }).subscribe(res => { 
      console.log(res);
    });
    alert("Data Updated Successfully..");
    this.studentupdateForm.reset();
  console.log(this.studentupdateForm.value);

  }
}
