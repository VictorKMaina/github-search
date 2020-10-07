import { Component, OnInit } from '@angular/core';
import { IQuery } from 'src/app/interfaces/query';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public query: IQuery = {query:"", type:""};

  constructor(public results:RequestService) { }

  ngOnInit(): void {
  }
  submit(){
    this.results.getData(this.query);
    setTimeout(()=>{
      console.log(this.results.results);
    }, 1000)
  }

}
