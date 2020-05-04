import { Component, OnInit } from '@angular/core';
import {Constants} from "../../../app.component";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  frameworkGithubUrl = Constants.frameworkGithubUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
