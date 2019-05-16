import { Component, OnInit } from "@angular/core";
import { MenuItemModel } from "../shared/models/menu-item.model";
import { MenuService } from "./menu.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  menu: MenuItemModel[];

  constructor() {}

  ngOnInit() {
    this.menu = MenuService.getMenu();
  }
}
