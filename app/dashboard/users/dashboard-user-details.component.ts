import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "../../shared/models/user";
import { UserService } from "../../shared/services/user.service";

@Component({
    template: `
    <div *ngIf="user">
         <h2>{{user.name}}</h2>
    </div>
    `,
})
export class DashboardUserDetailsComponent implements OnInit {
    user: User;

    constructor(
        private service: UserService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        // snapshot which won't change over the life cycle of a component
        // router provide a Observable for the parameters, and Observable is 'like' a data over the time, so is not just a snapshot, it's gonna be the parameters over time as they change
        // so, we gonna refactor and use Observable instead of snapshot

        // we gonna make sure the onchanges we re-evaluate our users
        // now this component will look for everytime the parameters in the route changes, and it will update the user in this component
        this.route.params.forEach(params => {
            let username = params["username"];

            this.service.getUser(username).then(user => {
                console.log(user);
                return this.user = user;
            });
        });

        // // OR
        // let username = this.route.snapshot.params["username"];
        // this.service.getUser(username).then(user => {
        //     console.log(user);
        //     return this.user = user;
        // });
    }
}
