import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-post-list',
  templateUrl: './admin-post-list.component.html',
  styleUrls: ['./admin-post-list.component.css']
})

export class AdminPostListComponent implements OnInit{
  postList: Post[];

  constructor(private router: Router, private postService: PostService) {
    this.postList = [];
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((x) => {
      this.postList = x;
    });
  }

  goToPostDetail(id: number) {
    this.router.navigate(['/admin/admin-post-detail',id]);
  }
}
