import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService, User} from "../services/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formGroup!: FormGroup;

  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(5), Validators.required])
    })
  }

  onSubmit() {
    const user: User = {
      email: this.formGroup.value.email, password: this.formGroup.value.password
    };
    const isLogin = this.authService.signIn(user);
    if (isLogin) {
      this.router.navigate(['/posts']);
    } else {
      const warning = this._snackBar.open("Такого пользователя не существует", undefined, {
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
      warning._dismissAfter(2000);
    }
  }
}
