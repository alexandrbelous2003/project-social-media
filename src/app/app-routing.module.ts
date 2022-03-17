import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'social/authentication/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'social',
    children: [
      {
        path: 'authentication',
        loadChildren: () => import ('./authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
