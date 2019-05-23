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

  @Output()
  toggleMenuEvent: EventEmitter<any> = new EventEmitter();

  logout() {
    this.logoutEvent.emit();
  }

  navigate(route: string) {
    this.navigateEvent.emit(route);
  }

  toggleMenu() {
    this.toggleMenuEvent.emit();
  }
}
