import React from "react";
import { MENU_ITEMS } from "../../common";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  return (
    <nav className='menu'>
      <ul className='menu__list'>
        {MENU_ITEMS.map((item) => (
          <MenuItem
            key={item.id}
            description={item.description}
            link={item.link}
          />
        ))}
      </ul>
    </nav>
  );
}
