import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import {StudentInsertComponent} from './student-insert/student-insert.component';
import {StudentUpdateComponent} from './student-update/student-update.component';
import {StudentDeleteComponent} from './student-delete/student-delete.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'student-list',component:StudentListComponent},
    {path:'student-insert',component:StudentInsertComponent},
    {path:'student-update',component:StudentUpdateComponent},
    {path:'student-delete',component:StudentDeleteComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
