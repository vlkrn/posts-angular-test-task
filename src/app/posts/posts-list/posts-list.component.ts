import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Post, PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {

  posts$: Observable<Post[]> = this.postsService.getPosts();

  constructor(private postsService: PostsService) {
  }
}
