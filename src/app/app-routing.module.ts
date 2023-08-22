import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {authGuard} from "./guards/auth.guard";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'posts',
    canActivate: [authGuard],
    loadChildren: () => import('./posts/posts.module').then((m) => m.PostsModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
