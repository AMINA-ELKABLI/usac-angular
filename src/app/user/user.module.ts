import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AddChildComponent} from './add-child/add-child.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'child/add' , component: AddChildComponent},
];

@NgModule({
  declarations: [AddChildComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class UserModule { }
