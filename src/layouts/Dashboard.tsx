import React, { useEffect, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { Layout, Responsive, WidthProvider } from 'react-grid-layout';
import Plot from 'react-plotly.js';
import { useRecoilCallback, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { gridListState, gridState, itemState } from '../atoms';
import { GridItemProps } from '../types/types';

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

interface ItemProps {
  item: GridItemProps;
}

const GridItem = ({ item }: ItemProps) => {
  const el = useRef<Plot & { el: Element }>(null);
  const [dimension, setDimension] = useRecoilState(itemState(item.id));
  const layout = { title: 'A Fancy Plot', width: dimension.width, height: dimension.height };
  useEffect(() => {
    const rect = el.current?.el.parentElement?.getBoundingClientRect();
    setDimension({ width: rect?.width, height: rect?.height });
  }, []);
  return (
    <>
      <Plot
        ref={el}
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
          },
          { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
        ]}
        layout={layout}
      />
    </>
  );
};

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
      const rect = element.parentElement?.getBoundingClientRect();
      const id = element.parentElement?.id;
      set(itemState(id ? id : ''), { width: rect?.width, height: rect?.height });
    }
  );

  return (
    <Container ref={drop} isActive={isActive} canDrop={canDrop}>
      <ResponsiveGridLayout
        rowHeight={30}
        width={1200}
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
