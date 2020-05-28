import AppBar from '@material-ui/core/AppBar';
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import styled from 'styled-components';

// import ChartItem from '../components/ChartItem';
import Dashboard from '../components/Dashboard';
import ThemeSwitcher from '../components/ThemeSwitcher';

// const drawerWidth = 240;

const Container = styled.div`
  display: flex;
`;

const Title = styled(Typography)`
  flex: 1;
`;

const Main = styled.main`
  flex-grow: 1,
  padding: ${({ theme }) => theme.spacing(3)},
`;

// const useStyles = makeStyles((theme) => ({
//   title: {
//     flexGrow: 1,
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerContainer: {
//     overflow: 'auto',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   layout: {
//     '& div': {
//       backgroundColor: 'red',
//     },
//   },
// }));

export default function MyDrawer() {
  return (
    <Container>
      <AppBar position="fixed">
        <Toolbar>
          <Title variant="h6" noWrap>
            Fastquant Playground
          </Title>
          <ThemeSwitcher />
        </Toolbar>
      </AppBar>
      {/* <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ChartItem />
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
      </Drawer> */}
      <Main>
        <Toolbar />
        <Dashboard />
      </Main>
    </Container>
  );
}
