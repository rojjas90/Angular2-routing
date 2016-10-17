import { Component } from "@angular/core";
import { HomeComponent }  from "./home/home.component";
import { AboutComponent }  from "./about/about.component";
import { ContactComponent }  from "./contact/contact.component";

@Component({
    selector: "my-app",
    styles: [`
        .active{
          color: #FFF !important;
        }
      `],
    templateUrl: "./app/app.component.html"
})
export class AppComponent {
    message = "This is the sample message.";
}
