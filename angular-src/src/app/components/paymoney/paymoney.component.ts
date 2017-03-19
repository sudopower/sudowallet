import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-paymoney',
  templateUrl: './paymoney.component.html',
  styleUrls: ['./paymoney.component.css']
})
export class PaymoneyComponent implements OnInit {
user:Object;


constructor(private authService: AuthService,
private router: Router) { }

ngOnInit() {
this.authService.getProfile().subscribe(profile=>{
this.user = profile.user;
},
err => {
console.log(err);
return false;
});
}


}
