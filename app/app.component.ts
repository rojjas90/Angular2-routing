import { Component } from "@angular/core";
import { HomeComponent }  from "./home/home.component";
import { AboutComponent }  from "./about/about.component";
import { ContactComponent }  from "./contact/contact.component";

@Component({
    selector: "my-app",
    styles: [`

  `],
    template: `
      <div class="jumbotron text-center">
        <h1>The App Lives!</h1>
        <p>{{ message }}</p>
      </div>

      <home-page></home-page>

      <about-page></about-page>

      <contact-page></contact-page>
  `
})
export class AppComponent {
    message = "This is the sample message.";
}
