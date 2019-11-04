import React from 'react';
import { Drawer, List } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './style.css';

const SideDrawer = props => {
  return (
    <Drawer
      anchor="left"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav" className="nav-bar">
        <Link to="/profile" className="nav-link">
          Minhas Despesas
        </Link>
        <Link to="/income" className="nav-link">
          Minhas Receitas
        </Link>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
