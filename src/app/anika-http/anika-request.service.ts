import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { Anika } from '../anika';
@Injectable({
  providedIn: 'root'
})
export class AnikaRequestService {
  anika:Anika

  name:string=""
  
  constructor(private http:HttpClient,private anikaService:AnikaRequestService) {
    this.anika = new Anika("","","","","","","","");
  
  }




gitRequest()
  
  
  {
    
    interface laetitia{
      name:string;
      email:string;
      url:string;
      avatar_url:string;
      id:string;
      

   
    }
    
 
      // var username="Sangwa-C";
     
    let promise = new Promise((resolve,reject)=>{
      // this.http.get<laetitia>("https://api.github.com/users/"+this.name+"?access_token=").toPromise().then (answer=>{
        this.http.get <laetitia>("https://api.github.com/users/"+this.name+"?access_token="+environment.apiUrl).toPromise().then(answer=>{
       console.log(answer);
        // https://api.github.com/users/daneden?access_token=a405e533327c83545c36ff3fa4df0a25e4454e73this.anika.hisemail = answer.email
        this.anika.author = answer.name
        this.anika.link = answer.url
        this.anika.avatar_url=  answer.avatar_url
        this.anika.id=  answer.id
            //  tokee   a405e533327c83545c36ff3fa4df0a25e4454e73

        resolve()
      },
      error=>{
        this.anika.link = "link is not there"
        this.anika.author = "Waaw"

        reject(error)
      })
    })
    return promise
   }
}

