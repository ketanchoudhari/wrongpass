import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
declare var FB: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    
  }
  username : string ="";
  password : string ="";
  show: boolean= false;        
  submit(){
  console.log("user name is " + this.username)
  this.clear();
  }
  clear(){
  this.username ="";
  this.password = "";
  this.show = true;
  }

  signInWithGoogle(){
  this.auth.googleSignIn();
  }

  singInWithFacebook(){
    this.auth.facebookSignIn();
  }
}
