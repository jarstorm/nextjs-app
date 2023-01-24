import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react'

interface MenuItemType {
  href: string
  text: string
}
const menuItems: MenuItemType[] = [{ href: "/", text: "Home" },
{ href: "/pokemon", text: "Pokemon list" },
{ href: "/crypto", text: "Crypto" },
{ href: "/crypto", text: 1}];

const AppMenu = () => {
  return (
    <>
      <List>
        {menuItems.map(item => {
          return (<ListItem disablePadding key={item.text}>
            <ListItemButton>
              <Link href={item.href}>
                <ListItemText primary={item.text} />
              </Link>
            </ListItemButton>
          </ListItem>)
        })}
      </List>
    </>
  )
}

export default AppMenu;