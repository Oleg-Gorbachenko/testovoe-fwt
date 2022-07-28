import React, { FC, memo } from 'react';

import style from './style/MySpinner.module.sass';
import { SpinnerPropsType } from './types';

export const Spinner: FC<SpinnerPropsType> = memo(
  ({ customMainStyle, customSizeStyle }: SpinnerPropsType) => {
    const finalMainStyle = `${style.mainBlock} ${customMainStyle || ''}`;
    const finalSizeStyle = `${style.speedingWheel} ${customSizeStyle || ''}`;

    return (
      <div className={finalMainStyle}>
        <div className={style.container}>
          <div className={finalSizeStyle} />
        </div>
      </div>
    );
  },
);
