import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 
import {HttpClientModule, HttpClient} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentInsertComponent } from './student-insert/student-insert.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentInsertComponent,
    StudentUpdateComponent,
    StudentDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
