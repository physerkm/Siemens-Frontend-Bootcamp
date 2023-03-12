import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';
import { AdminService } from 'src/app/services/admin.service';
import { VisitorStateService } from 'src/app/services/visitor-state.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  public postList:Post[] = [];
  public userList:User[] = [];
  //public olabilir
  constructor(private adminService: AdminService, private postService : PostService, public visitorService: VisitorStateService) {
    this.adminService.getPosts().subscribe((x) => {
      this.postList = x;
    })
    this.adminService.getUsers().subscribe((x) => {
      this.userList = x;
    })
  }
}
