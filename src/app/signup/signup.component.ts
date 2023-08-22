import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService, User} from "../services/auth.service";
import {Router} from "@angular/router";
import {confirmPasswordValidator} from "../validators/confirmPasswordValidator";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  formGroup!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(5), Validators.required]),
      passwordRepeat: new FormControl('', [Validators.minLength(5), Validators.required])
    }, confirmPasswordValidator)
  }

  onSubmit() {
    const newUser: User = {
      email: this.formGroup.value.email, password: this.formGroup.value.password
    };
    this.authService.signUp(newUser);
    this.router.navigate(['/posts']);
  }

  returnBack() {
    this.router.navigate(['/login']);
  }
}
