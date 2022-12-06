import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usr = ''
  pwd= ''
  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.authServ.usr == 'teste01' && this.authServ.pwd == '1234'){
      this.router.navigate(['user-page'])
    }
  }
 
  login(form: any){
    if(form.value['username'] == 'teste01' && 
    form.value['pass'] == '1234'){
        this.authServ.pwd = form.value['pass']
        this.authServ.usr = form.value['username']
        this.authServ.credits = 120
        this.router.navigate(['user-page'])
        
    }
    else { //login invalido

    }
  }
}
