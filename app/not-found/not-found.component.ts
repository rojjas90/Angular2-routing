import { Component }  from "@angular/core";

@Component({
  template: `
  <div class="jumbotron text-center">
    <h2>404 Not found</h2>
    <p>You be lost. Follow the breadcrumbs back <a routerLink="/">Home</a>.</p>
  </div>
  `
})
export class NotFoundComponent { }
