import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlertComponent } from "./components/alert/alert.component";
import { MatDialogModule, MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [AlertComponent],
  entryComponents: [AlertComponent]
})
export class SharedModule {}
