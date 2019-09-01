import { Component, OnInit } from '@angular/core';
import {environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Anika} from '../anika';
import {Repository} from '../repository';
import { AnikaRequestService} from '../anika-http/anika-request.service';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  providers: [AnikaRequestService],
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {




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
  console.log(this.userRepos);
}


searchRepos() {
    this.searchRepo = '';
    this.resultCount = 10;

}
}
   


