import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService, User } from '../rest.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private router: Router,  public rest: RestService) { }

    ngOnInit() { }
    user: User[] = [];

    onLogin() {
        this.getUserDetails();
        if (this.user != null){
            localStorage.setItem('isLoggedin', 'true'); 
            this.router.navigate(['/dashboard']);
        }
        
    }

    getUserDetails(): void {
        this.rest.getLogin().subscribe((resp: any) => {
            console.log(resp);
          });
        // this.rest.getLogin();
      }
}
