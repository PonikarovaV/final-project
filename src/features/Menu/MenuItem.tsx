import React from "react";

interface MenuItemProps {
  description: string,
  link: string,
}

export const MenuItem = (props: MenuItemProps) => {

  return (
    <li className='menu__item'>
      <a className='menu__link' href={props.link}>{props.description}</a>
    </li>
  );
}
