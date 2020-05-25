import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import React from 'react';
import { DragSourceMonitor, useDrag } from 'react-dnd';

const useStyles = makeStyles({
  root: {
    opacity: (props: { opacity: number }) => props.opacity,
  },
});

const ChartItem = () => {
  const name = 'ChartItem';
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'component' },
    end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name}`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;
  const classes = useStyles({
    opacity,
  });
  return (
    <ListItem className={classes.root} ref={drag} button key="Disclosures">
      <ListItemIcon>
        <InsertChartIcon />
      </ListItemIcon>
      <ListItemText primary="Disclosures" />
    </ListItem>
  );
};

export default ChartItem;
