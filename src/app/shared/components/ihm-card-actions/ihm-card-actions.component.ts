import { Component, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "ihm-card-actions",
  templateUrl: "./ihm-card-actions.component.html",
  styleUrls: ["./ihm-card-actions.component.scss"]
})
export class IhmCardActionsComponent {
  @Output()
  cancelEvent: EventEmitter<any> = new EventEmitter();

  @Output()
  saveEvent: EventEmitter<any> = new EventEmitter();

  @Input()
  disabled: boolean;

  save() {
    this.saveEvent.emit();
  }

  cancel() {
    this.cancelEvent.emit();
  }
}
