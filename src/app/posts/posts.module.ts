import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts.component';
import {PostsRoutingModule} from "./posts-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {PostsListComponent} from './posts-list/posts-list.component';
import {PostInfoComponent} from './post-info/post-info.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    PostsComponent,
    PostsListComponent,
    PostInfoComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ]
})
export class PostsModule {
}
