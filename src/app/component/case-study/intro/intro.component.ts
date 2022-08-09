import {Component, OnInit} from '@angular/core';
import {Constants} from '../../../app.component';

@Component({
  selector: 'app-case-study-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class CaseStudyIntroComponent implements OnInit {
  frameworkGithubUrl = Constants.frameworkGithubUrl;
  UIManualUrl = Constants.UIManualUrl;
  shrikanthProfile = Constants.shrikanthProfile;
  harshaProfile = Constants.harshaProfile;

  constructor() {
  }

  ngOnInit(): void {
  }

}
