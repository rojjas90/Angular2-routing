import { Component, OnInit }  from "@angular/core";
import { ActivatedRoute }  from "@angular/router";


export class User {
    id: number;
    name: string;
    username: string;
    avatar: string;
}

const users: User[] =
    [
        { id: 1, name: "Rojas", username: "grojas", avatar: "/Content/images/boy.png" },
        { id: 2, name: "Cadete", username: "cdt", avatar: "/Content/images/girl.png" },
        { id: 3, name: "Rangel", username: "Rgl", avatar: "/Content/images/man.png" }
    ];

@Component({
    selector: "about-user",
    styles: [`
      img {
        /*max-width: 50%;*/
        max-width: 300px;
        margin: 20px auto;
      }
      `],
    template: `
    <div class="jumbotron text-center" *ngIf="user">
        <h1>{{user.name}} ({{user.username}})</h1>
        <img alt="avatar" [src]="user.avatar" class="img-responsive img-circle">
    </div>
  `
})
export class AboutUserComponent implements OnInit {

    user;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // grab the current username
        let username = this.route.snapshot.params["username"];

        this.user = users.find(function(user) {
            return user.username === username;
        });

        console.log(username);
    }
}
