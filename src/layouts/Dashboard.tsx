import React from 'react';
import { useDrop } from 'react-dnd';
import { Layout, Responsive, WidthProvider } from 'react-grid-layout';
import { useRecoilCallback, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { gridListState, gridState, itemState } from '../atoms';
import GridItem from '../components/GridItem';
import { GridItemProps } from '../types';

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

  const onResize = useRecoilCallback(
    async ({ set }, layout: Layout[], oldItem: Layout, newItem: Layout, placeholder: Layout, event: MouseEvent, element: HTMLElement) => {
      const id = element.parentElement?.id;
      setTimeout(() => {
        const rect = element.parentElement?.getBoundingClientRect();
        const width = rect ? rect.width : 0;
        const height = rect ? rect.height : 0;
        set(itemState(id ? id : ''), { width, height });
      }, 0);
    }
  );

  return (
    <Container ref={drop} isActive={isActive} canDrop={canDrop}>
      <ResponsiveGridLayout
        rowHeight={30}
        isDraggable={true}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        onResizeStop={onResize}
        onBreakpointChange={onBreakpointChange}
      >
        {widgets.map((item: GridItemProps) => (
          <GridItemContainer id={item.id} key={item.id} data-grid={{ x: item.x, y: item.y, w: item.w, h: item.h }}>
            <GridItem item={item} />
          </GridItemContainer>
        ))}
      </ResponsiveGridLayout>
    </Container>
  );
};

export default Dashboard;
