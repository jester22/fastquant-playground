import React from 'react';
import { useDrop } from 'react-dnd';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { gridListState, gridState } from '../atoms';
import { GridItem } from '../types/types';

interface Props {
  isActive: boolean;
  canDrop: boolean;
}

const ResponsiveGridLayout = WidthProvider(Responsive);

const Container = styled.div<Props>`
  height: 100%;
  background-color: ${({ isActive, canDrop, theme }) => {
    if (isActive) return theme.palette.grey[500];
    if (canDrop) return theme.palette.grey[500];
    return 'transparent';
  }};
`;

const GridItemContainer = styled.div`
  background-color: red;
`;

const Dashboard = () => {
  const widgets = useRecoilValue(gridListState);
  const setGridState = useSetRecoilState(gridState);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'component',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;

  function onBreakpointChange(breakpoint: string, cols: number) {
    setGridState({
      breakpoint,
      cols,
    });
  }

  return (
    <Container ref={drop} isActive={isActive} canDrop={canDrop}>
      <ResponsiveGridLayout rowHeight={30} width={1200} cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }} onBreakpointChange={onBreakpointChange}>
        {widgets.map((o: GridItem) => (
          <GridItemContainer key={o.id} data-grid={{ x: o.x, y: o.y, w: o.w, h: o.h }}>
            {o.id}
          </GridItemContainer>
        ))}
      </ResponsiveGridLayout>
    </Container>
  );
};

export default Dashboard;
