import React, { ReactElement } from 'react';

import { Paginator } from '../Paginator';
import { Painting } from '../Painting';

import style from './style/Main.module.sass';

import { useAppDispatch, useAppSelector } from 'hooks';
import {
  getCurrentPage,
  getCurrentPaintingsArray,
  getPageSize,
  getPaintingsDescription,
} from 'store/paintings/selectors';
import { getCurrentPaintings } from 'store/paintings/thunks';

export const Main = (): ReactElement => {
  const dispatch = useAppDispatch();
  const currentPaintings = useAppSelector(getCurrentPaintingsArray);
  const paintingsDescription = useAppSelector(getPaintingsDescription);
  const currentPage = useAppSelector(getCurrentPage);
  const pageSize = useAppSelector(getPageSize);
  const buttonHandler = (p: number): void => {
    dispatch(getCurrentPaintings(p.toString()));
  };

  return (
    <div className={style.main}>
      <div className={style.items}>
        {currentPaintings.map(painting => (
          <Painting key={painting.id} painting={painting} />
        ))}
      </div>
      <Paginator
        pageSize={pageSize}
        totalPaintingsCount={paintingsDescription.length}
        currentPage={currentPage}
        onPageChanged={p => buttonHandler(p)}
      />
    </div>
  );
};
