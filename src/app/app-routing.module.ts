import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './layout/students/students.component';
import { ViewStudentComponent } from './layout/students/view-student/view-student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
  },
  {
    path: 'students/:id',
    component: ViewStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
