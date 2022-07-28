import React, { ChangeEvent, FC } from 'react';

import style from './style/RadioInput.module.sass';
import { SuperSelectPropsType } from './types';

import delImgDark from 'common/images/deleteDark.png';
import delImgLight from 'common/images/deleteLight.png';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getCurrentTheme } from 'store/paintings/selectors';
import { resetFilter } from 'store/paintings/thunks';

export const RadioInput: FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  placeholder,
  ...restProps
}) => {
  const dispatch = useAppDispatch();

  const currentTheme = useAppSelector(getCurrentTheme);

  let finalSelectClassName = style.select;
  let finalOptionClassName = style.option;
  let delImage = delImgDark;

  if (currentTheme === 'light') {
    finalSelectClassName = `${style.select} ${style.selectLight}`;
    finalOptionClassName = `${style.option} ${style.optionLight}`;
    delImage = delImgLight;
  }

  const mappedOptions: any[] = options
    ? options.map(o => (
        <option key={`${o}-1`} className={finalOptionClassName} value={o}>
          {o}
        </option>
      ))
    : [];

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>): void => {
    onChangeOption && onChangeOption(e.currentTarget.value);
    onChange && onChange(e);
  };

  const onDelClick = (): void => {
    dispatch(resetFilter('1'));
  };

  return (
    <>
      <img
        src={delImage}
        alt="delete"
        className={style.delImg}
        onClick={onDelClick}
        role="presentation"
      />
      <select className={finalSelectClassName} onChange={onChangeCallback} {...restProps}>
        <option value="" style={{ display: 'none' }}>
          {placeholder}
        </option>
        {mappedOptions}
      </select>
    </>
  );
};
