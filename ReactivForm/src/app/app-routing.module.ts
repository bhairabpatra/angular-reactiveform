import { ContactComponent } from './pages/contact/contact.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveGuard } from './resolve.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path:'home' , component:HomeComponent},
  {path:'blogs' , component:BlogsComponent,
    resolve:{
      data: ResolveGuard,
    }
  },
  {path:"contact", component:ContactComponent},
  {path:'produts',
  loadChildren: () => import('./prodct-dashboard/prodct-dashboard.module').then(m => m.ProdctDashboardModule)

  // loadChildren:'./prodct-dashboard/prodct-dashboard.module#ProdctDashboardModule'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
