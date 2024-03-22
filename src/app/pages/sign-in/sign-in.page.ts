import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  signInForm: FormGroup;
  constructor( private formBuilder: FormBuilder,public route: ActivatedRoute, private router: Router) { 
    this.signInForm = this.formBuilder.group({
      nome:  ['', Validators.required],
      cognome:  ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      foto:[]
    });
  }

  ngOnInit() {
    console.log("sign_in")
  }

  effettuasignIn(){
    console.log("signInForm", this.signInForm.value)
    console.log("email", this.signInForm.value.email)
  }
  goLogin(){
    this.router.navigateByUrl(`/login`);
  }

  imageSrc: string | ArrayBuffer | null=null;
  onFileChange(event: Event) {
    let  file;
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
       file = target.files[0];
    }
    if (!file) {
      return;
    }
  
    // Check the file type
    if (!['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/svg+xml'].includes(file.type)) {
      console.error('Invalid file type');
      return;
    }
  
    // Check the file size
    if (file.size > 2048 * 1024) {
      console.error('File is too large');
      return;
    }
  
    // If the file passes the checks, you can add it to your form
    const reader = new FileReader();
    reader.onload = () => {
      this.imageSrc = reader.result;
    };
    reader.readAsDataURL(file);
  }
  
}
