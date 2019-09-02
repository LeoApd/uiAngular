import { AuthGuards } from './util/auth.guards';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CadastrarClienteComponent } from './components/cliente/cadastrar-cliente/cadastrar-cliente.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuards]},
  { path: 'login', component: LoginComponent},
  { path: 'cadastrar', component: CadastrarClienteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
