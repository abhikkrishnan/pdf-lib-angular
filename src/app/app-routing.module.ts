import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfEditComponent } from './pdf-edit/pdf-edit.component';

const routes: Routes = [
  {path:'',component:PdfEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
