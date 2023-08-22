import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PostsComponent} from "./posts.component";
import {PostsListComponent} from "./posts-list/posts-list.component";
import {PostInfoComponent} from "./post-info/post-info.component";

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      {
        path: '',
        component: PostsListComponent
      },
      {
        path: 'id/:id',
        component: PostInfoComponent
      },
      {
        path: '**',
        redirectTo: '/posts'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
