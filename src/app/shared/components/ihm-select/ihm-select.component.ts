import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  ViewChild
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { MatSelect } from "@angular/material";

@Component({
  selector: "ihm-select",
  templateUrl: "./ihm-select.component.html",
  styleUrls: ["./ihm-select.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IhmSelectComponent),
      multi: true
    }
  ]
})
export class IhmSelectComponent implements ControlValueAccessor {
  private _items: Array<any>;

  @ViewChild(MatSelect) matSelect: MatSelect;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() name: string;
  @Input() required: boolean;
  @Input() optionProperty: string;

  @Input()
  set items(value: Array<any>) {
    this._items = value;

    // TODO - Isso é gambi. Tinha que ser atualizado automaticamente com o reactive forms
    this.matSelect.value = null;
  }

  get items() {
    return this._items;
  }

  @Output() changeEvent: EventEmitter<string> = new EventEmitter<string>();

  change() {
    this.changeEvent.emit(this.name);
  }

  writeValue(value: any): void {
    this.matSelect.writeValue(value);
  }

  registerOnChange(fn: any): void {
    this.matSelect.registerOnChange(fn);
  }

  registerOnTouched(fn: any): void {
    this.matSelect.registerOnTouched(fn);
  }

  setDisabledState?(isDisabled: boolean): void {
    this.matSelect.setDisabledState(isDisabled);
  }
}
