import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './shared/routes';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'menu', component: MenuComponent,
    children: [
      { path: 'product', component: ProductComponent }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
