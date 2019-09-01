
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { Anika } from '../anika';
import {Repository} from '../repository';
@Injectable({
  providedIn: 'root'
})
export class AnikaRequestService {
  anika: Anika;
  repository:Repository;
  newRepository: any;
  searchRepo: any;

  constructor(private http: HttpClient) {
      this.repository = new Repository('', '', '',new Date(),'');
      this.anika = new Anika('', '', '', 0, '', new Date(), 0, 0);
  }

  user(name) {
      interface ApiResponse {
          name: string;
          html_url: string;
          description: string;
          created_at: Date;
          login: string;
          public_repos: number;
          followers: number;
          following: number;
          avatar_url: string;
      }

      let promise = new Promise((resolve,reject) => {
          this.http.get<ApiResponse>('https://api.github.com/users/' + name + '?access_token=' + environment.  apiUrl).toPromise().then(answer => {
              this.anika.name =answer.name;
              this.anika.html_url = answer.html_url;
              this.anika.login = answer.login;
              this.anika.avatar_url = answer.avatar_url;
              this.anika.public_repos =answer.public_repos;
              this.anika.created_at = answer.created_at;
              this.anika.followers =answer.followers;
              this.anika.following = answer.following;
              resolve();
          },
          // error=>{
          //   this.anika.name = "Never, never, never give up"
          //   this.anika.name= "Winston Churchill"
   
          //   reject(error)
          error=>{
            this.anika.name = "Never, never, never give up"
            // this.anika.name= "some errors"
   
            reject(error)
          })
        })
      // });
      return promise;

  }

  gitUserRepos(name) {
      interface ApiResponse {
          name: string;
          description: string;
          created_at: Date;
      }

      let  myPromise = new Promise((resolve, reject) => {
          this.http.get<ApiResponse>('https://api.github.com/users/' + name + '/repos?order=created&sort=asc?access_token=' + environment.  apiUrl).toPromise().then(getRepoResponse => {
              this.newRepository = getRepoResponse;
              resolve();
          }, error => {
              reject(error);
          });
      });
      return myPromise;
  }


  gitRepos(searchName) {
      interface ApiResponse {
          items: any;
      }

      const promise = new Promise((resolve, reject) => {
          this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + searchName + ' &per_page=10 ' + environment.  apiUrl).toPromise().then(getRepoResponse => {
              this.searchRepo = getRepoResponse.items;

              resolve();
          }, error => {
              this.searchRepo = 'error';
              reject(error);
          });
      });
      return promise;
  }
}

