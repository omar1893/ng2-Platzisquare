import { AuthorizationService } from './../../services/authorization.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  email:string;
  password:string;
  constructor(private auth:AuthorizationService) { 
  }

  registrar(){
    this.auth.registro(this.email,this.password)
  }

  ngOnInit() {
    
  }

}
