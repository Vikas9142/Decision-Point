import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserPostComponent } from './user-post/user-post.component';


const routes: Routes = [
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user-post',
    component: UserPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
