import { Injectable } from "@angular/core";
import { User }  from "../models/user";

const usersPromise: Promise<User[]> = Promise.resolve(
    [
        { id: 1, name: "Rojas", username: "grojas", avatar: "/Content/images/boy.png" },
        { id: 2, name: "Cadete", username: "cdt", avatar: "/Content/images/girl.png" },
        { id: 3, name: "Rangel", username: "Rgl", avatar: "/Content/images/man.png" }
    ]
);

@Injectable()
export class UserService {
    // get all users
    getUsers() {
        return usersPromise;
    }

    // find a specific user
    getUser(username) {
        return usersPromise.then(users => users.find(user => user.username === username));

        // let user = userPromise.then(user => {
        //     return users.find(user => {
        //         return user.username === username;
        //     });
        // });
        //
        // return user;
    }
}
