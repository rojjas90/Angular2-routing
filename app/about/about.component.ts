import { Component, OnInit }  from "@angular/core";
import { ActivatedRoute } from "@angular/router"; // 16.- we have to use ActivatedRoute to wrap information about the current route, and pass it into our constructor
import { User }  from "../shared/models/user";
// import { UserService }  from "../shared/services/user.service";


@Component({
    selector: "about-page",
    styles: [`
      .profile-card {
        background: #f3f3f3;
        border-radius: 4px;
        padding: 30px;
        text-align: center;
      }

      .profile-card img {
        max-width: 50%;
        margin: 15px auto;
      }
      `],
    template: `
    <div class="row"> <!-- *ngIf="users" attribute removed-->
        <div class="col-sm-4" *ngFor="let user of users">
            <div class="profile-card" [routerLink]="['/about', user.username]">
                <img [src]="user.avatar" alt="" class="img-responsive img-circle">
                <h2>{{user.name}}</h2>
                <p>
                    <a href="https://www.google.com.mx/#q={{ user.username }}" target="_blank">
                            {{user.username}}
                    </a>
                </p>
            </div>
        </div>
    </div>
  `
})
export class AboutComponent implements OnInit {
    // users: User[] = users;
    users: User[];

    constructor(
        // private service: UserService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        // // this.service.getUsers().then(users => this.users = users);
        // // // OR, both are valid to use it
        this.route.data.forEach((data: { users: User[] }) => {
            console.log(data);

            // we can do, instead of wrap after the component is activated (using this.service.getUsers()....), we gonna make sure that the users is part of the data, and we can get data from our data variable
            this.users = data.users;
        });
        // // version minified
        // this.route.data.forEach((data: { users: User[] }) => { this.users = data.users; });
    }
}
