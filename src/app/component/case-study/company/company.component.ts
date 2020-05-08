import { Component, OnInit } from '@angular/core';
import {Constants} from "../../../app.component";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  zingerGithubUrl = Constants.zingerGithubUrl;
  zingerPartnerGithubUrl = Constants.zingerPartnerGithubUrl;
  UIManualUrl = Constants.UIManualUrl;
  requestDemoUrl = Constants.requestDemoUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
