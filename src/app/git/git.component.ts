
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anika} from '../anika';
import { AnikaRequestService} from '../anika-http/anika-request.service';
import{Repository} from '../repository'
// import { AnikaRequestService } from '../anika-http/anika-request.service';
import {environment } from '../../environments/environment';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  providers: [  AnikaRequestService],
  styleUrls: ['./git.component.css']
})

export class GitComponent implements OnInit {

public name = 'daneden';
public user: string;

anika:Anika ;
repository: Repository;
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
  this.userRepos.Repos(this.name);

}


// searchRepos() {
//     this.searchRepo = '';
//     this.resultCount = 10;

// }
 }
   


