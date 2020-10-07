import { Injectable } from '@angular/core';
import { User } from "src/app/classes/user";
import { Repository } from "src/app/classes/repository";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { IQuery } from '../interfaces/query';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  public results:User;
  public repos = [];

  constructor(private http:HttpClient) { }

  getData(query: IQuery){
    console.log(query);
    let userUrl = "https://api.github.com/users/"+query.query+"?access_token=" + environment.apiKey;
    let repoUrl = "https://api.github.com/users/"+query.query + "/repos?access_token=" + environment.apiKey;
    this.http.get(repoUrl).subscribe((data:Repository[]) => {
        data.forEach((repo, index)=>{
          this.repos.push(
            new Repository(repo.id, repo.name, repo.owner, repo.description)
          );
        });
    })
    this.http.get(userUrl).subscribe((data:User) => {
      this.results = new User(data.id, data.name, data.login, data.avatar_url, repoUrl);
    })
  }
  reposUrl(){

  }
}
