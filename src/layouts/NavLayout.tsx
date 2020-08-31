import { List } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import styled from 'styled-components';

import ChartItem from '../components/ChartItem';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { ChartTypes } from '../types';
import Dashboard from './Dashboard';
import WidgetProperties from './WidgetProperties';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Title = styled(Typography)`
  flex: 1;
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Canvas = styled.div`
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing(3)}px`};
  height: 100%;
  margin-left: 320px;
  margin-right: 320px;
`;

const LeftDrawer = styled.div`
  position: fixed;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.paper};
  width: 320px;
`;

const RightDrawer = styled.div`
  position: fixed;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.paper};
  width: 320px;
  right: 0;
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
      <Main>
        <LeftDrawer>
          <List>
            <ChartItem text="Disclosure" type={ChartTypes.DISCLOSURE} />
            <ChartItem text="Network" type={ChartTypes.NETWORK} />
          </List>
        </LeftDrawer>
        <Canvas>
          <Dashboard />
        </Canvas>
        <RightDrawer>
          <WidgetProperties />
        </RightDrawer>
      </Main>
    </Container>
  );
}
