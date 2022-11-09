import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    role = null;

    constructor(private router: Router) { }

    ngOnInit() { }

    getRole(role: any) {
        this.role = role;
    }

    updateRole() {
        if (this.role == null) {
            window.alert('Please select a role');
        } else {
            this.router.navigate(['/' + this.role]);
        }
    }
}
