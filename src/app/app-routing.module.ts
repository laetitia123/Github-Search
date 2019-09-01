import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{RepoComponent} from './repo/repo.component'
import{GitComponent} from './git/git.component'

const routes: Routes = [ { path: 'git', component: GitComponent},
{ path: 'repo', component: RepoComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
