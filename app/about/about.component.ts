import { Component }  from "@angular/core";

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
    <div class="row" *ngIf="users">
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
export class AboutComponent {
    users: User[] = users;
}
