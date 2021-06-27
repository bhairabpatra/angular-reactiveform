
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {Routes , RouterModule} from '@angular/router';

const routes:Routes =[
      {path:'produts', component:DashboardComponent}
]
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]

})
export class ProdctDashboardModule {

    constructor(){
      console.log('prodcut dahboards')
    }

}
