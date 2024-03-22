import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor( private formBuilder: FormBuilder,public route: ActivatedRoute, private router: Router,) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    console.log("Login")
  }
  effettuaLogin() {
    console.log("password", this.loginForm.value.password)
    console.log("email", this.loginForm.value.email)
  }
  goRegister(){
    this.router.navigateByUrl(`/sign-in`);
  }

}
