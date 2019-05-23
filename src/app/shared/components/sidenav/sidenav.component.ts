import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent {
  @Output()
  navigateEvent: EventEmitter<string> = new EventEmitter();

  @Input()
  menus: any[];

  @Input()
  opened: boolean;

  navigate(route: string) {
    this.navigateEvent.emit(route);
  }
}
