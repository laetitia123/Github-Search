
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anika} from '../anika';
import { AnikaRequestService} from '../anika-http/anika-request.service';
// import{Repository} from '../repository'
// import { AnikaRequestService } from '../anika-http/anika-request.service';
import {environment } from '../../environments/environment';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  providers: [  AnikaRequestService],
  styleUrls: ['./git.component.css']
})

export class GitComponent implements OnInit {

// repository:Repository;
//   anika:Anika
//    name:string="daneden"
//  data:any;
//  repo:any;
//   constructor( private http:HttpClient) { 


//   }
//   ngOnInit() {
    
   
//     }
//     gitRequest(){
//       let promise = new Promise((resolve,reject)=>{
//     this.http.get("https://api.github.com/users/"+this.name+"?access_token="+environment.apiUrl).subscribe(data=>{
//       this.data=data;
//       console.log(data)
//       resolve()
//       },
      
//       )
//     })
//     return promise
//    }
//    repos(){
//     let promise = new Promise((resolve,reject)=>{
//   this.http.get("https://api.github.com/users/"+this.name+"/repos").toPromise().then(repo=>{
//     this.repo=repo;
//     console.log(this.repo)
//     resolve()
//     },
//     error=>{
//       this.repository.name = "link is not there"
//       this.repository.name = "Waaw"

//       reject(error)
//     })
//   })
//   return promise
//  }
public name = 'laetitia123';
public user: string;

anika:Anika ;
// repository: Repository;
public searchRepo: string;
public resultCount = 12;


findUser(username) {
    this.user = '';
    this.name  = username;
    this.ngOnInit();
}


constructor(public userRequest:AnikaRequestService, public userRepos: AnikaRequestService) { }

ngOnInit() {
  this.userRequest.user(this.name);
  this.anika = this.userRequest.anika;
  this.userRepos.gitUserRepos(this.name);
  console.log(this.userRepos);
}


// searchRepos() {
//     this.searchRepo = '';
//     this.resultCount = 10;

// }
}
   


