import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { itemState, selectedWidgetItemIDState } from '../atoms';
import { ChartTypes, GridItemProps } from '../types';
import DisclosureChart from './DisclosureChart';

interface Props {
  item: GridItemProps;
}

const GridItem = ({ item }: Props) => {
  const el = useRef<HTMLDivElement & Element>(null);
  const atom = useMemo(() => itemState(item.id), [item.id]);
  const [dimension, setDimension] = useRecoilState(atom);
  const selectedWidgetItemID = useSetRecoilState(selectedWidgetItemIDState);
  const layout = { width: dimension.width, height: dimension.height };
  const setDimensionCB = useCallback((_layout) => setDimension(_layout), [setDimension]);
  useEffect(() => {
    const rect = el.current?.parentElement?.getBoundingClientRect();
    setDimensionCB({ width: rect?.width, height: rect?.height });
  }, [setDimensionCB]);
  const onItemClick = () => {
    selectedWidgetItemID(item.id);
  };

  return (
    <div ref={el} onClick={onItemClick}>
      {item.type === ChartTypes.DISCLOSURE && <DisclosureChart layout={layout} />}
    </div>
  );
};

export default GridItem;
