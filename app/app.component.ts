import { Component } from "@angular/core";
import { HomeComponent }  from "./home/home.component";
import { AboutComponent }  from "./about/about.component";
import { ContactComponent }  from "./contact/contact.component";

@Component({
    selector: "my-app",
    styles: [`

  `],
    template: `
    <header>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a href="#" class="navbar-brand">My Routing App</a>
                </div>

                <ul class="nav navbar-nav">
                    <li><a href="#">Home1</a></li>
                    <li><a href="#">Home2</a></li>
                    <li><a href="#">Home3</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
    <!--  <div class="jumbotron text-center">
        <h1>The App Lives!</h1>
        <p>{{ message }}</p>
      </div> -->

<!--      <home-page></home-page>
      <about-page></about-page>
      <contact-page></contact-page> -->
  `
})
export class AppComponent {
    message = "This is the sample message.";
}
