import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addtowallet',
  templateUrl: './addtowallet.component.html',
  styleUrls: ['./addtowallet.component.css']
})
export class AddtowalletComponent implements OnInit {
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
  changePassword(){

  var ip = document.getElementById("newpwd");
  if (ip.style.display == 'none') {
        ip.style.display = 'inline';
    } else {
        ip.style.display = 'none';
    }
  }

}
