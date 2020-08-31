import React from 'react';
import { useRecoilValue } from 'recoil';

import { gridListState, selectedWidgetItemIDState } from '../atoms';

const WidgetGridInfo = () => {
  const selectedWidgetItemID = useRecoilValue(selectedWidgetItemIDState);
  const gridList = useRecoilValue(gridListState);
  const widgetItem = gridList.find((o) => o.id === selectedWidgetItemID);
  return <div>{widgetItem?.id}</div>;
};

export default WidgetGridInfo;
