import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent {
  userList:User[];

  constructor(private router:Router,private userService:AdminService){
    this.userList=[];
  }
  
  ngOnInit(): void {
     this.userService.getUsers().subscribe((x) => {
      this.userList = x;
    });
  }

   goToUserDetail(id: number) {
    // this.router.navigateByUrl(`/post-detail/${id}`);
    this.router.navigate(['/admin/admin-user-detail',id]);
  }

}
