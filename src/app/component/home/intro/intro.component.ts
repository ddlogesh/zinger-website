import {Component, OnInit} from '@angular/core';
import {Constants} from '../../../app.component';

@Component({
  selector: 'app-home-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class HomeIntroComponent implements OnInit {
  frameworkGithubUrl = Constants.frameworkGithubUrl;
  docsUrl = Constants.docsUrl;
  logeshProfile = Constants.logeshProfile;
  harshaProfile = Constants.harshaProfile;

  constructor() {
  }

  ngOnInit(): void {
  }

}
