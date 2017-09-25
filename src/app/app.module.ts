import { AuthorizationService } from './services/authorization.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';

import { DetalleComponent } from './components/detalle/detalle.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { ContactoComponent } from './components/contacto/contacto.component';

import { LugaresService } from './services/lugares.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CrearComponent } from './components/crear/crear.component';
import { LinkifyPipe } from './pipes/linkify.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const appRoutes: Routes = [
  { path: 'lugares', component: LugaresComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '', component: LugaresComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'crear/:id', component: CrearComponent }
]

export const firebaseConfig = {
  apiKey: "AIzaSyB7cQxqQFEUnup7iJ6DkQrbfHBuAvIC3-w",
  authDomain: "platzisquare-c3581.firebaseapp.com",
  databaseURL: "https://platzisquare-c3581.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "420795905808"
};

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinkifyPipe,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB92kY35b3EdnrThW0VCGjvpRMPyeFLuYE'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [LugaresService, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
