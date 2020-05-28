import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useDrop } from 'react-dnd';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { useRecoilValue } from 'recoil';

import { gridState } from '../atoms';
import { GridItem } from '../types/types';

const useStyles = makeStyles((theme) => ({
  layout: {
    backgroundColor: ({
      isActive,
      canDrop,
    }: {
      isActive: boolean;
      canDrop: boolean;
    }) => {
      if (isActive) return theme.palette.grey[500];
      if (canDrop) return theme.palette.grey[500];
      return 'transparent';
    },
    '& div': {
      backgroundColor: 'red',
    },
  },
}));

const Dashboard = () => {
  const widgets = useRecoilValue(gridState);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'component',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  const classes = useStyles({
    isActive,
    canDrop,
  });

  return (
    <div ref={drop}>
      <ResponsiveGridLayout
        rowHeight={30}
        width={1200}
        className={classes.layout}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        {widgets.map((o: GridItem) => (
          <div key={o.id} data-grid={{ x: o.x, y: o.y, w: o.w, h: o.h }}>
            {o.id}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default Dashboard;
