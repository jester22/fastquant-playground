import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import React from 'react';
import { DragSourceMonitor, useDrag } from 'react-dnd';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { gridListState, gridState } from '../atoms';
import { GridItemProps } from '../types/types';

interface Props {
  isDragging: boolean;
}

const Container = styled.div<Props>`
  opacity: ${({ isDragging }) => (isDragging ? 0.4 : 1)};
`;

const ChartItem = () => {
  const setGridListState = useSetRecoilState(gridListState);
  const { cols } = useRecoilValue(gridState);
  const name = 'Disclosures';
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'component' },
    end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        setGridListState((oldGridListState: GridItemProps[]) => [
          ...oldGridListState,
          {
            id: uuidv4(),
            x: (oldGridListState.length * 2) % (cols || 12),
            y: Infinity,
            w: 6,
            h: 10,
          },
        ]);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <Container isDragging={isDragging}>
      <ListItem ref={drag} button key="Disclosures">
        <ListItemIcon>
          <InsertChartIcon />
        </ListItemIcon>
        <ListItemText primary="Disclosures" />
      </ListItem>
    </Container>
  );
};

export default ChartItem;
