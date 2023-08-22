import {Component, OnInit} from '@angular/core';
import {Post, PostsService} from "../../services/posts.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {
  post$!: Observable<Post>;

  constructor(private postsService: PostsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.post$ = this.postsService.getPost(params['id']);
    })
  }
}
