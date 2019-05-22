import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = this.authService.currentUser;

    if (user) {
      return next.handle(
        req.clone({
          setHeaders: { Authorization: "Bearer " + user.access_token }
        })
      );
    }

    return next.handle(req);

    // return from(this.authService.getUser()).pipe(
    //   switchMap(user =>
    //     next.handle(req.clone({ setHeaders: { Authorization: "Bearer " + user.access_token } }))
    //   )
    // );
  }
}
