import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlertComponent } from "./components/alert/alert.component";
import { MatDialogModule, MatButtonModule } from "@angular/material";
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [AlertComponent, UnauthorizedComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [AlertComponent, UnauthorizedComponent],
  entryComponents: [AlertComponent],
  providers: [
    AuthGuardService,
    AuthService
  ]
})
export class SharedModule { }
