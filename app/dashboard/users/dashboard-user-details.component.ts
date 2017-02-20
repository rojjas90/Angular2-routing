import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../../shared/models/user";
import { UserService } from "../../shared/services/user.service";

@Component({
    template: `
    <div class="jumbotron">
         <div *ngIf="user">
              <h2>{{user.name}}</h2>

              <div class="form-group">
                   <input type="text" [(ngModel)]="editName" class="form-control">
              </div>

              <div class="form-group text-center">
                   <button (click)="cancel()" class="btn btn-danger">Cancel</button>
                   <button (click)="save()" class="btn btn-success">Save</button>
              </div>
         </div>
    </div>
    `,
})
export class DashboardUserDetailsComponent implements OnInit {
    user: User;
    editName: string;

    constructor(
        private service: UserService,
        private route: ActivatedRoute,
        private router: Router
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
                // return this.user = user;

                this.user = user;
                // preserve our name data  before to change it; just after we would pressed save button, the data will save
                this.editName = user.name;

            });
        });

        // // OR
        // let username = this.route.snapshot.params["username"];
        // this.service.getUser(username).then(user => {
        //     console.log(user);
        //     return this.user = user;
        // });
    }

    save() {
        this.user.name = this.editName;
        this.router.navigate(["/dashboard/users"]);
    }

    cancel() {
        this.router.navigate(["/dashboard/users"]);
    }

    canDeactivate() {
        console.log("I am navigation away");

        // if the editName !== this.user.name
        if (this.user.name !== this.editName) {
            return window.confirm("Discard changes?");
        }

        return true;
    }
}
