import React, { ReactElement, useEffect } from 'react';

import { Container } from '../Container';
import { Spinner } from '../Spinner';

import style from './style/App.module.sass';

import { useAppDispatch, useAppSelector } from 'hooks';
import { getCurrentTheme, getIsLoading } from 'store/paintings/selectors';
import { getCurrentPaintings, getPaintingsData } from 'store/paintings/thunks';

export const App = (): ReactElement => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector<boolean>(getIsLoading);
  const currentTheme = useAppSelector(getCurrentTheme);
  const finalAppClass = currentTheme === 'dark' ? style.App : style.AppLight;

  useEffect(() => {
    dispatch(getPaintingsData());
    dispatch(getCurrentPaintings('1'));
  }, [dispatch]);

  return <div className={finalAppClass}>{isLoading ? <Spinner /> : <Container />}</div>;
};
