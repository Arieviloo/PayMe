import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
// import SideDrawer from '../side-drawer/SideDrawer';
// import Logo from './../../res/images/logo.png';
import { Box } from '@material-ui/core';

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
            {/* <MenuIcon /> */}
          </IconButton>
          <Box className="header-title">PayMe</Box>

          {/* <div className="header-logo-wrapper">
            <img src="" className="logo-image" alt="logo" />
            <div className="header-logo-title" />
          </div> */}

          {/* <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          /> */}
        </ToolBar>
      </AppBar>
    );
  }
}
