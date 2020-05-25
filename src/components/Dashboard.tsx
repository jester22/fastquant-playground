import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useDrop } from 'react-dnd';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';

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
  const layouts = {
    lg: [
      { i: 'a', x: 0, y: 0, w: 2, h: 2 },
      { i: 'b', x: 1, y: 0, w: 1, h: 4 },
      { i: 'c', x: 2, y: 0, w: 1, h: 2 },
    ],
  };
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
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        <div key="1">1</div>
        <div key="2">2</div>
        <div key="3">3</div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default Dashboard;
