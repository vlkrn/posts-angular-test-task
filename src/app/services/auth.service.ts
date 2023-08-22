import {Injectable} from '@angular/core';

export interface User {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public isLogin(): boolean {
    const loginString = localStorage.getItem("currentLogin");
    return !!loginString;

  }

  public signUp(user: User): void {
    localStorage.setItem(user.email, JSON.stringify(user));
    localStorage.setItem("currentLogin", user.email);
  }

  public signIn(user: User): boolean {
    const userString = localStorage.getItem(user.email)
    if (userString) {
      const dbUser: User = JSON.parse(userString);
      if (dbUser.password === user.password) {
        localStorage.setItem("currentLogin", user.email);
        return true;
      }
    }
    return false;
  }

  public logout(): void {
    localStorage.removeItem("currentLogin");
  }

  public currentUser(): string | null {
    return localStorage.getItem("currentLogin");
  }
}
