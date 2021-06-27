import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  users:any =[]
  constructor(private __userservice: UserService , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

      this.users = this.activatedRoute.snapshot.data['data']
      console.log("-----------------" + this.users)
  }
}
