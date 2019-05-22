import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent {
  @Input()
  userName: string;

  @Input()
  userLogin: string;

  @Output()
  logoutEvent: EventEmitter<any> = new EventEmitter();

  @Output()
  navigateEvent: EventEmitter<string> = new EventEmitter();

  logout() {
    this.logoutEvent.emit();
  }

  navigate(rota: string) {
    this.navigateEvent.emit(rota);
  }
}
