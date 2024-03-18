import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username=""
  password=""
  constructor(private authserv: AuthenticationService, private router: Router) { }

  ngOnInit() {

    console.log("login")
  }
  effettuaLogin() {
    console.log("loginsss")
    /*
    this.authserv.login(this.username, this.password).subscribe(
      (response) => {
        // Gestisci il caso in cui il login ha successo
        console.log(this.username)
        console.log('Login avvenuto con successo:', response);
        localStorage.setItem('token', response.token);
      },
      (error) => {
        // Gestisci il caso in cui si verifica un errore durante il login
        console.error('Errore durante il login:', error);
      }
    );
    */
  }

  async gotoregistrazione() {
    this.router.navigateByUrl("/register");
  }

  async gotohome() {
    this.router.navigateByUrl("/homepage");
  }

  /*
   

    ngOnInit() {
      console.log("OKE")
      /*
      const tokenFromLocalStorage = localStorage.getItem('token');
      if (tokenFromLocalStorage) {
        this.cookiesrv.set('token', tokenFromLocalStorage);//mi piacciono i biscotti
        this.authserv.loginWithToken(tokenFromLocalStorage).subscribe(
          () => {
            this.gotohome();
            this.username = this.cookiesrv.get('username');
            console.log(this.username+"acahhhhh");
          },
          (error) => {
            console.error('Errore durante il login con il token:', error);
          }
        );
    
    }
  
    
    */
}

