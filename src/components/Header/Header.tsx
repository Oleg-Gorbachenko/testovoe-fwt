import React, { ReactElement, useState } from 'react';

import { InputText } from '../InputText';
import { RadioInput } from '../RadioInput';

import style from './style/Header.module.sass';

import logo from 'common/images/logo.png';
import sunDark from 'common/images/sunDark.png';
import sunLight from 'common/images/sunLight.png';
import { DropDown } from 'components/DropDown';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  changeTheme,
  setFilterByAuthor,
  setFilterByLocation,
} from 'store/paintings/actions';
import {
  getAuthors,
  getCurrentTheme,
  getFilterByAuthor,
  getFilterByLocation,
  getLocations,
} from 'store/paintings/selectors';
import { fetchPaintingsByString, searchPaintingsById } from 'store/paintings/thunks';

export const Header = (): ReactElement => {
  const dispatch = useAppDispatch();

  const authors = useAppSelector(getAuthors);
  const locations = useAppSelector(getLocations);
  const currentTheme = useAppSelector(getCurrentTheme);
  const filterByAuthor = useAppSelector(getFilterByAuthor);
  const filterByLocation = useAppSelector(getFilterByLocation);

  const [inputValue, setInputValue] = useState('');

  const authorsName = authors.map(author => author.name);
  const location = locations.map(location => location.location);
  const sun = currentTheme === 'dark' ? sunLight : sunDark;

  const onInputChange = (e: any): void => {
    setInputValue(e);
  };

  const onEnterDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      dispatch(fetchPaintingsByString('1', inputValue));
    }
  };

  const filteredByAuthorName = (option: string): void => {
    const currentAuthor = authors.filter(author => author.name === option);

    currentAuthor.map(author => dispatch(searchPaintingsById('1', author.id.toString())));
    dispatch(setFilterByAuthor(option));
    dispatch(setFilterByLocation(''));
  };

  const filteredByLocation = (option: string): void => {
    const currentLocation = locations.filter(location => location.location === option);

    currentLocation.map(location =>
      dispatch(searchPaintingsById('1', location.id.toString())),
    );
    dispatch(setFilterByLocation(option));
    dispatch(setFilterByAuthor(''));
  };

  const onSunClick = (): void => {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    dispatch(changeTheme(nextTheme));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.logoWrapper}>
        <img src={logo} alt="logo" className={style.logo} />
        <img src={sun} alt="sun" role="presentation" onClick={onSunClick} />
      </div>
      <div className={style.searchWrapper}>
        <InputText
          placeholder="Name"
          value={inputValue}
          onChangeText={onInputChange}
          onKeyDown={onEnterDown}
        />
        <RadioInput
          name="radio"
          options={authorsName}
          value={filterByAuthor}
          onChangeOption={option => filteredByAuthorName(option)}
          placeholder="Author"
        />
        <RadioInput
          name="radio"
          options={location}
          value={filterByLocation}
          onChangeOption={option => filteredByLocation(option)}
          placeholder="Location"
        />
        <DropDown />
      </div>
    </div>
  );
};
