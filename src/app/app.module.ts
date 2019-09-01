import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule}from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitComponent } from './git/git.component';
import { FormComponent } from './form/form.component';
import{AnikaRequestService} from './anika-http/anika-request.service'

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    FormComponent
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
