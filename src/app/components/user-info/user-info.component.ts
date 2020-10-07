import { Component, Input, OnInit, Query } from '@angular/core';
import { RequestService } from "src/app/services/request.service";
import { IQuery } from "src/app/interfaces/query";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() query: IQuery;
  
  constructor(public results:RequestService, public repos:RequestService) { }

  ngOnInit() {
    this.results.getRepos(this.query);
    setTimeout(()=>{
      console.log(this.repos.repos)
    }, 1000)
    this.repos = this.results.results.repos;
  }

}
