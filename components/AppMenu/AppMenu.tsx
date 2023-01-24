import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import React, { Component, useState } from 'react'
import styles from "./styles.js"

type MenuItems = "/" | "pokemon";

const AppMenu = () => {
  const [activeItem, setActiveItem] = useState("/");  


  return (
    <>
    
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Link href="/">
              <ListItemText primary="Home" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <Link href="/pokemon">
              <ListItemText primary="Pokemon list" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <Link href="/crypto">
              <ListItemText primary="Crypto" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>      
    </>
  )
}

export default AppMenu;