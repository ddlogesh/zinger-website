import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zinger-website';
}
export class Constants {
  public static frameworkGithubUrl = "https://github.com/ddlogesh/zinger-framework"
  public static zingerGithubUrl = "https://github.com/shrikanth7698/Zinger-Android-App"
  public static zingerPartnerGithubUrl = "https://github.com/harshavardhan98/Zinger-Seller-App"

  public static apiDocsUrl = "https://documenter.getpostman.com/view/6369926/Szmb6KVo"
  public static docsUrl = "/docs/getting-started/architecture-overview"
  public static guideUrl = "/docs/installation-guide/prerequisites"
  public static UIManualUrl = "/docs/user-interface-manual/overview"
  public static contributeUrl = "/docs/contribution-guideline"
  public static caseStudyUrl = "/case-study"

  public static logeshProfile = "https://logeshdina.tech"
  public static harshaProfile = "https://www.linkedin.com/in/harshavardhan-p"
  public static shrikanthProfile = "https://shrikanthravi.me/"
}
