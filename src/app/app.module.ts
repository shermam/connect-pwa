import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app-root-component/app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MasterPageComponent } from "./app-master-page/master-page.component";
import {
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatDividerModule
} from "@angular/material";
import { AuthGuardService } from "./shared/services/auth-guard.service";
import { AuthService } from "./shared/services/auth.service";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, MasterPageComponent],
  imports: [
    HttpClientModule,
    SharedModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
