import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {

  constructor(private afAuth: AngularFireAuth) {

  }

  public login = (email, password) => {
    this.afAuth.auth.signInWithEmailAndPassword(email,password)
    .then((response) => {
      alert('Usuario Loggeado con exito');
      console.log(response)
    })
    .catch((error)=>{
      alert('Un error ha ocurrido')
      console.log(error);
    })
  }

  public registro = (email, password) => {
    this.afAuth.auth.createUserWithEmailAndPassword(email,password)
      .then((response) => {
        alert('Usuario Registrado con exito');
        console.log(response)
      })
      .catch((error)=>{
        alert('Un error ha ocurrido')
        console.log(error);
      })
  }

}
