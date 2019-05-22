import { Injectable, EventEmitter } from "@angular/core";
import { UserManager, User } from "oidc-client";
import { environment } from "src/environments/environment";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  mgr: UserManager = new UserManager(environment.authConfig);
  userLoadededEvent: EventEmitter<User> = new EventEmitter<User>();
  currentUser: User;
  loggedIn = false;
  authHeaders: Headers;

  constructor() {
    this.mgr
      .getUser()
      .then(user => {
        if (user) {
          this.loggedIn = true;
          this.currentUser = user;
          this.userLoadededEvent.emit(user);
          console.log(this.currentUser);
        } else {
          this.loggedIn = false;
        }
      })
      .catch(err => {
        this.loggedIn = false;
      });

    this.mgr.events.addUserLoaded(user => {
      this.currentUser = user;
      this.loggedIn = !(user === undefined);
      if (!environment.production) {
        console.log("authService addUserLoaded", user);
      }
    });

    this.mgr.events.addUserUnloaded(e => {
      if (!environment.production) {
        console.log("user unloaded");
      }
      this.loggedIn = false;
    });
  }

  isLoggedInObs(): Observable<boolean> {
    return from(this.mgr.getUser()).pipe(
      map<User, boolean>(user => {
        if (user) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  clearState() {
    this.mgr
      .clearStaleState()
      .then(function() {
        console.log("clearStateState success");
      })
      .catch(function(e) {
        console.log("clearStateState error", e.message);
      });
  }

  getUser(): Promise<User> {
    return this.mgr
      .getUser()
      .then(user => {
        this.currentUser = user;
        console.log("got user", user);
        this.userLoadededEvent.emit(user);
        return user;
      })
      .catch(err => {
        console.log(err);
        return null;
      });
  }

  removeUser() {
    this.mgr
      .removeUser()
      .then(() => {
        this.userLoadededEvent.emit(null);
        console.log("user removed");
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  login() {
    this.mgr
      .signinRedirect()
      .then(function() {
        console.log("signinRedirect done");
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  endSigninMainWindow() {
    this.mgr
      .signinRedirectCallback()
      .then(function(user) {
        console.log("signed in", user);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  logout() {
    this.mgr.getUser().then(user => {
      return this.mgr
        .signoutRedirect({ id_token_hint: user.id_token })
        .then(resp => {
          console.log("signed out", resp);
          setTimeout(() => {
            console.log("testing to see if fired...");
          }, 5000);
        })
        .catch(function(err) {
          console.log(err);
        });
    });
  }

  endSignoutMainWindow() {
    this.mgr
      .signoutRedirectCallback()
      .then(function(resp) {
        console.log("signed out", resp);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
}
