import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app-root-component/app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MasterPageComponent } from "./app-master-page/master-page.component";
import { MatButtonModule } from "@angular/material";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, MasterPageComponent],
  imports: [
    HttpClientModule,
    SharedModule,
    MatButtonModule,
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
