import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useRecoilState } from 'recoil';

import { itemState } from '../atoms';
import { ChartTypes, GridItemProps } from '../types/types';
import DisclosureChart from './DisclosureChart';

interface Props {
  item: GridItemProps;
}

const GridItem = ({ item }: Props) => {
  const el = useRef<HTMLDivElement & Element>(null);
  const atom = useMemo(() => itemState(item.id), [item.id]);
  const [dimension, setDimension] = useRecoilState(atom);
  const layout = { width: dimension.width, height: dimension.height };
  const setDimensionCB = useCallback((_layout) => setDimension(_layout), [setDimension]);
  useEffect(() => {
    const rect = el.current?.parentElement?.getBoundingClientRect();
    setDimensionCB({ width: rect?.width, height: rect?.height });
  }, [setDimensionCB]);
  return <div ref={el}>{item.type === ChartTypes.DISCLOSURE && <DisclosureChart layout={layout} />}</div>;
};

export default GridItem;
