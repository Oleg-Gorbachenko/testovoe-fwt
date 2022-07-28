import React, { ReactElement } from 'react';

import { Header } from '../Header';
import { Main } from '../Main';

import style from './style/Container.module.sass';

export const Container = (): ReactElement => {
  return (
    <div className={style.container}>
      <Header />
      <Main />
    </div>
  );
};
