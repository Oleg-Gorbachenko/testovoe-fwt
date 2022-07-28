import React, { ChangeEvent, FC, KeyboardEvent } from 'react';

import style from './style/InputText.module.sass';
import { SuperInputTextPropsType } from './types';

import { useAppSelector } from 'hooks';
import { getCurrentTheme } from 'store/paintings/selectors';

export const InputText: FC<SuperInputTextPropsType> = ({
  type,
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  ...restProps
}) => {
  const currentTheme = useAppSelector(getCurrentTheme);

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(e);
    onChangeText && onChangeText(e.currentTarget.value);
  };

  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>): void => {
    onKeyPress && onKeyPress(e);
    onEnter && e.key === 'Enter' && onEnter();
  };

  const finalInputClassName =
    currentTheme === 'dark'
      ? style.superInput
      : `${style.superInput} ${style.inputLight}`;

  return (
    <input
      type={type}
      onChange={onChangeCallback}
      onKeyDown={onKeyPressCallback}
      className={finalInputClassName}
      {...restProps}
    />
  );
};
