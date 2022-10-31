import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './components/auth/sing-in/sing-in.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: 'sing-in',
    component: SingInComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: '',
    redirectTo: '/sing-in',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: SingInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
