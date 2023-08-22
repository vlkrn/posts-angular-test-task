import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private API_URL = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {
  }

  public getPosts(): Observable<Post[]> {
    const posts = this.http.get<Post[]>(this.API_URL + 'posts');
    return posts
  }


  public getPost(id: number): Observable<Post> {
    const post = this.http.get<Post>(this.API_URL + 'posts/' + id);
    return post;
  }
}
