import { Component, OnInit } from '@angular/core';
import {Constants} from "../../app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  frameworkGithubUrl = Constants.frameworkGithubUrl;
  apiDocsUrl = Constants.apiDocsUrl;
  docsUrl = Constants.docsUrl;
  guideUrl = Constants.guideUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
