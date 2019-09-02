import { UserService } from './services/user.service';
import { AuthInterceptor } from './util/auth.interceptor';
import { SharedService } from './services/shared.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CadastrarClienteComponent } from './components/cliente/cadastrar-cliente/cadastrar-cliente.component';
import { CadastrarProdutoComponent } from './components/produto/cadastrar-produto/cadastrar-produto.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMainComponent } from './components/header/header-main/header-main.component';
import { HeaderUserComponent } from './components/header/header-user/header-user.component';
import { AuthGuards } from './util/auth.guards';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarClienteComponent,
    HomeComponent,
    LoginComponent,
    CadastrarProdutoComponent,
    HeaderMainComponent,
    HeaderUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    SharedService,
    UserService,
    AuthGuards,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
