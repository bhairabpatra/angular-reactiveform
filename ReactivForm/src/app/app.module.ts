import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppStockStatusComponent } from './app-stock-status/app-stock-status.component';
import { DataService } from './data.service';
import { ResolveGuard } from './resolve.guard';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { HomeComponent } from './pages/home/home.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AppStockStatusComponent,
    HomeComponent,
    BlogsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [DataService,ResolveGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
