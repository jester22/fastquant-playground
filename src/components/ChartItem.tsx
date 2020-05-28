import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import React from 'react';
import { DragSourceMonitor, useDrag } from 'react-dnd';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { gridState } from '../atoms';
import { GridItem } from '../types/types';

const StyledListItem = styled(ListItem)<{ isDragging: boolean }>`
  opacity: ${({ isDragging }: { isDragging: boolean }) => (isDragging ? 0.4 : 1)};
`;

const ChartItem = () => {
  const setGridState = useSetRecoilState(gridState);
  const name = 'Disclosures';
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'component' },
    end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name}`);
        setGridState((oldGridState: GridItem[]) => [
          ...oldGridState,
          {
            id: uuidv4(),
            x: oldGridState.length * 2,
            y: Infinity,
            w: 2,
            h: 2,
          },
        ]);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <StyledListItem isDragging={isDragging} ref={drag} button key="Disclosures">
      <ListItemIcon>
        <InsertChartIcon />
      </ListItemIcon>
      <ListItemText primary="Disclosures" />
    </StyledListItem>
  );
};

export default ChartItem;
