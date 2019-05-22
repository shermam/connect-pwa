import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlertComponent } from "./components/alert/alert.component";
import {
  MatDialogModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatDividerModule,
  MatToolbarModule
} from "@angular/material";
import { UnauthorizedComponent } from "./components/unauthorized/unauthorized.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { AuthService } from "./services/auth.service";
import { AuthInterceptorService } from "./interceptors/auth-interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

@NgModule({
  declarations: [AlertComponent, UnauthorizedComponent, ToolbarComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule
  ],
  exports: [AlertComponent, UnauthorizedComponent, ToolbarComponent],
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
