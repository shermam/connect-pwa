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
  MatSidenavModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatTableModule
} from "@angular/material";
import { UnauthorizedComponent } from "./components/unauthorized/unauthorized.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { AuthService } from "./services/auth.service";
import { AuthInterceptorService } from "./interceptors/auth-interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { IhmCardHeaderComponent } from "./components/ihm-card-header/ihm-card-header.component";
import { IhmCardActionsComponent } from "./components/ihm-card-actions/ihm-card-actions.component";
import { IhmSelectComponent } from "./components/ihm-select/ihm-select.component";
import { ReactiveFormsModule } from "@angular/forms";
import { IhmTableComponent } from "./components/ihm-table/ihm-table.component";

@NgModule({
  declarations: [
    AlertComponent,
    UnauthorizedComponent,
    ToolbarComponent,
    SidenavComponent,
    PageNotFoundComponent,
    IhmCardHeaderComponent,
    IhmCardActionsComponent,
    IhmSelectComponent,
    IhmTableComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  exports: [
    AlertComponent,
    UnauthorizedComponent,
    ToolbarComponent,
    SidenavComponent,
    IhmCardHeaderComponent,
    IhmCardActionsComponent,
    IhmSelectComponent,
    IhmTableComponent
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
