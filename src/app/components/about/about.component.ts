import { Component, OnInit, Query } from '@angular/core';
import { RequestService } from "src/app/services/request.service";
import { IQuery } from "src/app/interfaces/query";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public user: IQuery = {query:"victorkmaina", type:"user"}

  constructor() { }

  ngOnInit(){}
}
