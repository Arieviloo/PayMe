import React, { Component } from 'react';
import { Box, AppBar } from '@material-ui/core';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import SideDrawer from '../side-drawer/index';

import './style.css';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false,
    };
  }

  toggleDrawer = value => this.setState({ drawerOpen: value });

  render() {
    return (
      <AppBar position="fixed">
        <ToolBar className="header">
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box className="header-title">PayMe</Box>

          <Link to="/" style={{ color: '#fff' }}>
            <ExitToAppIcon />
          </Link>

          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </ToolBar>
      </AppBar>
    );
  }
}
