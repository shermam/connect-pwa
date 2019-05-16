import { MenuItemModel } from "../shared/models/menu-item.model";
import { routes } from "../app-routing.module";

function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

export class MenuService {
  private static _menu: MenuItemModel[];
  static getMenu() {
    if (!MenuService._menu) {
      MenuService._menu = flatten(
        routes.map(route => {
          return route.children.map(child => {
            const menuItem = new MenuItemModel();
            menuItem.label = child.path;
            menuItem.icon = "icon";
            menuItem.link = child.path;
            return menuItem;
          });
        })
      );
    }

    return MenuService._menu;
  }

  static setMenuChildren(menuItemLabel: string, children: MenuItemModel[]) {
    const menu = MenuService._menu.find(m => m.label === menuItemLabel);

    console.log(menu);

    if (!menu) return;
    menu.items = children;

    console.log(MenuService._menu);
  }
}
