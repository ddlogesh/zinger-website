import {Component, OnInit} from '@angular/core';
import {Constants} from '../../../app.component';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss']
})
export class ContributeComponent implements OnInit {
  frameworkGithubUrl = Constants.frameworkGithubUrl;
  contributeUrl = Constants.contributeUrl;

  constructor() {
  }

  ngOnInit(): void {
  }

}
