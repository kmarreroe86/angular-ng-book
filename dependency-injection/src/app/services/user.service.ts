import {Injectable} from "@angular/core";

@Injectable()
export class UserService {

  user: any;

  setUser(newUser): void {
    this.user = newUser;
  }

  getUser(): any {
    return this.user;
  }

}
