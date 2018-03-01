import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Subject, BehaviorSubject } from 'rxjs/Rx';

import { User } from './user.model';

/**
 * UserService manages our current user
*/
@Injectable()
export class UsersService {
  // `currentUser` contains the current user
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}

export const userServiceInjectables: Array<any> = [UsersService];
