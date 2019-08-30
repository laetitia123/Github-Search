import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anika} from '../anika';
import{Repository} from '../repository'
import { AnikaRequestService } from '../anika-http/anika-request.service';
import {environment } from '../../environments/environment';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})

export class GitComponent implements OnInit {

repository:Repository;
  anika:Anika
   name:string="daneden"
 data:any;
 repo:any;
  constructor( private http:HttpClient,private anikaService:AnikaRequestService) { 


  }
  ngOnInit() {
    // interface laetitia{
    //   name:string;
    //   email:string;
    //   url:string;
    //   image:string;

    this.anikaService.gitRequest()
  
  this.anika = this.anikaService.anika;
   
    }
    gitRequest(){
      let promise = new Promise((resolve,reject)=>{
    this.http.get("https://api.github.com/users/"+this.name+"?access_token="+environment.apiUrl).subscribe(data=>{
      this.data=data;
      console.log(data)
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
   repos(){
    let promise = new Promise((resolve,reject)=>{
  this.http.get("https://api.github.com/users/"+this.name+"/repos").subscribe(repo=>{
    this.repo=repo;
    console.log(this.repo)
    resolve()
    },
    error=>{
      this.repository.name = "link is not there"
      this.repository.name = "Waaw"

      reject(error)
    })
  })
  return promise
 }
   
}


