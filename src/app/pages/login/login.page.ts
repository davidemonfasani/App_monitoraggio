import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(   private formBuilder: FormBuilder,) { 
    this.loginForm = this.formBuilder.group({
      useremail: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    console.log("Login")
  }
  effettuaLogin() {
    console.log("Login")
  }
}
