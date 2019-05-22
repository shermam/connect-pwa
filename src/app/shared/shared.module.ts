import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlertComponent } from "./components/alert/alert.component";
import {
  MatDialogModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatDividerModule,
  MatToolbarModule,
  MatSidenavModule
} from "@angular/material";
import { UnauthorizedComponent } from "./components/unauthorized/unauthorized.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { AuthService } from "./services/auth.service";
import { AuthInterceptorService } from "./interceptors/auth-interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AlertComponent,
    UnauthorizedComponent,
    ToolbarComponent,
    SidenavComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [
    AlertComponent,
    UnauthorizedComponent,
    ToolbarComponent,
    SidenavComponent
  ],
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
