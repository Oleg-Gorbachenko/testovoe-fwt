import React, { ReactElement, useState } from 'react';

import style from './style/DropDown.module.sass';

import { changeThemeFunc } from 'common/functions/changeThemeFunc';
import { useAppSelector } from 'hooks';
import { getCurrentTheme } from 'store/paintings/selectors';

export const DropDown = (): ReactElement => {
  const currentTheme = useAppSelector(getCurrentTheme);
  const [isShow, setIsShow] = useState<boolean>(false);
  const onDropDownClick = (): void => {
    setIsShow(!isShow);
  };
  const finalDropDownCloseClassName = changeThemeFunc(
    style.dropdownClose,
    style.dropdownCloseLight,
    currentTheme,
  );
  const finalDropDownOpenClassName = changeThemeFunc(
    style.dropdownOpen,
    style.dropdownOpenLight,
    currentTheme,
  );
  const finalInputClassName = changeThemeFunc(
    style.inputDark,
    style.inputLight,
    currentTheme,
  );
  const finalTitleClassName = changeThemeFunc(
    style.title,
    style.titleLight,
    currentTheme,
  );
  const finalDashClassName = changeThemeFunc(style.dash, style.dashLight, currentTheme);

  return (
    <div className={style.wrapper}>
      {isShow ? (
        <div className={finalDropDownOpenClassName}>
          <div
            role="presentation"
            className={finalTitleClassName}
            onClick={onDropDownClick}
          >
            Created
          </div>
          <div className={style.inputWrapper}>
            <input className={finalInputClassName} type="number" placeholder="from" />
            <div className={finalDashClassName} />
            <input className={finalInputClassName} type="number" placeholder="before" />
          </div>
        </div>
      ) : (
        <div
          className={finalDropDownCloseClassName}
          role="presentation"
          onClick={onDropDownClick}
        >
          Created
        </div>
      )}
    </div>
  );
};
