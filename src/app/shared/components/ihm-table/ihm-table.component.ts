import { Component, Input, OnInit } from "@angular/core";

export interface column {
  property: string;
  label: string;
  action?: columAction;
  formatter?: (value: any) => any;
}

export interface columAction {
  icon: string;
  label: string;
  callback: (row: any) => void;
}

@Component({
  selector: "ihm-table",
  templateUrl: "./ihm-table.component.html",
  styleUrls: ["./ihm-table.component.scss"]
})
export class IhmTableComponent implements OnInit {
  @Input() data: Array<any>;
  @Input() columnsToDisplay: column[] = [];

  columnNames: string[];

  ngOnInit() {
    this.columnNames = this.columnsToDisplay.map(c => c.property);
  }

  format(value, formatter) {
    if (formatter) return formatter(value);
    return value;
  }
}
