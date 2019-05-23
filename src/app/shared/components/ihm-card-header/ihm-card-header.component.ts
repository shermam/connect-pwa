import { Component, Input } from "@angular/core";

@Component({
  selector: "ihm-card-header",
  templateUrl: "./ihm-card-header.component.html",
  styleUrls: ["./ihm-card-header.component.scss"]
})
export class IhmCardHeaderComponent {
  @Input()
  icon: string;

  @Input()
  subtitle: string;

  @Input()
  title: string;
}
