import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() data: any;
  users:any =[]
  constructor(private __userservice: UserService) { }

  ngOnInit(): void {
      this.__userservice.getSongList().subscribe((data) =>{
          this.users = data
          console.warn(this.users)
      })
  }

}
