import { Grid, List } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import styled from 'styled-components';

import ChartItem from '../components/ChartItem';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { ChartTypes } from '../types/types';
import Dashboard from './Dashboard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Title = styled(Typography)`
  flex: 1;
`;

const Main = styled(Grid)`
  height: 100%;
`;

const Canvas = styled.div`
  padding: ${({ theme }) => `${theme.spacing(3)}px`};
  height: 100%;
`;

const Drawer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

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
      <Toolbar />
      <Main container>
        <Grid item xs={2}>
          <Drawer>
            <List>
              <ChartItem text="Disclosure" type={ChartTypes.DISCLOSURE} />
              <ChartItem text="Network" type={ChartTypes.NETWORK} />
            </List>
          </Drawer>
        </Grid>
        <Grid item xs={8}>
          <Canvas>
            <Dashboard />
          </Canvas>
        </Grid>
        <Grid item xs={2}>
          <Drawer></Drawer>
        </Grid>
      </Main>
    </Container>
  );
}
