import { AuthorizationService } from './../../services/authorization.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:any = {}
  constructor(private auth:AuthorizationService) { 
   
  }

  login(){
    this.auth.login(this.data.email,this.data.password)
  }


  ngOnInit() {
  }

}
