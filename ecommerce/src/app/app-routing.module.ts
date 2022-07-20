import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/bookstore-app/about/about/about.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';


const routes: Routes = [
  {
    path:'',
    component:BookstoreAppComponent
  },
  {
    path:'about',
    component:AboutComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
