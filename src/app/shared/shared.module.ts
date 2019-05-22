import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlertComponent } from "./components/alert/alert.component";
import { MatDialogModule, MatButtonModule } from "@angular/material";
import { UnauthorizedComponent } from "./components/unauthorized/unauthorized.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { AuthService } from "./services/auth.service";
import { AuthInterceptorService } from "./interceptors/auth-interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  declarations: [AlertComponent, UnauthorizedComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [AlertComponent, UnauthorizedComponent],
  entryComponents: [AlertComponent],
  providers: [
    AuthGuardService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class SharedModule {}
