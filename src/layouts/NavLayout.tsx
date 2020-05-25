import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import React from 'react';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';

import ThemeSwitcher from '../components/ThemeSwitcher';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  layout: {
    '& div': {
      backgroundColor: 'red',
    },
  },
}));

export default function MyDrawer() {
  const classes = useStyles();
  const layouts = {
    lg: [
      { i: 'a', x: 0, y: 0, w: 2, h: 2 },
      { i: 'b', x: 1, y: 0, w: 1, h: 4 },
      { i: 'c', x: 2, y: 0, w: 1, h: 2 },
    ],
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Fastquant Playground
          </Typography>
          <ThemeSwitcher />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key="Disclosures">
              <ListItemIcon>
                <InsertChartIcon />
              </ListItemIcon>
              <ListItemText primary="Disclosures" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <Drawer
        anchor="right"
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List></List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <ResponsiveGridLayout
          rowHeight={30}
          width={1200}
          className={classes.layout}
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        >
          <div key="1">1</div>
          <div key="2">2</div>
          <div key="3">3</div>
        </ResponsiveGridLayout>
      </main>
    </div>
  );
}
