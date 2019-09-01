import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule}from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitComponent } from './git/git.component';
import { FormComponent } from './form/form.component';
import{AnikaRequestService} from './anika-http/anika-request.service';
import { RepoComponent } from './repo/repo.component';
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    FormComponent,
    RepoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AnikaRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
