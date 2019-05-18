import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app-root-component/app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MasterPageComponent } from "./app-master-page/master-page.component";
import { MatToolbarModule, MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [AppComponent, MasterPageComponent],
  imports: [
    MatToolbarModule,
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
