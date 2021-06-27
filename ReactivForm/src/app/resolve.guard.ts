import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {

  constructor( private resService:UserService){}
  resolve(){
       return this.resService.getSongList();
  }



}
