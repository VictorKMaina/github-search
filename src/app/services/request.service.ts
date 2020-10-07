import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/user';
import { Repository } from 'src/app/classes/repository';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IQuery } from '../interfaces/query';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  public results: User;
  public repos = [];

  private;

  constructor(private http: HttpClient) {}

  getRepos(query: IQuery) {
    this.results = new User(0, '', '', '', '');
    this.repos = [];

    let userUrl =
      'https://api.github.com/users/' +
      query.query +
      '?access_token=' +
      environment.apiKey;

    let repoUrl =
      'https://api.github.com/users/' +
      query.query +
      '/repos?access_token=' +
      environment.apiKey;

    let promise = new Promise((resolve,reject)=>{
      this.http.get(repoUrl).toPromise().then((response: Repository[])=>{
        for(let repo of response){
          this.repos.push(new Repository(repo.id, repo.name, repo.owner, repo.description))
        }
        resolve()
      },
      error=>{
        this.repos = [new Repository(null, "Unavailable", new User(0, null, null, null, null) , null)];
        console.log("No repository response from Github API");
        reject(error);
      })
    })
    return promise;

    // this.http.get(userUrl).subscribe((data: User) => {
    //   this.results = new User(
    //     data.id,
    //     data.name,
    //     data.login,
    //     data.avatar_url,
    //     repoUrl
    //   );
    // });
  }
  reposUrl() {}
}
