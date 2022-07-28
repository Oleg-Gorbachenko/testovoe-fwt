import React, { FC, memo } from 'react';

import style from './style/Painting.module.sass';
import { PaintingPropsType } from './types';

import { useAppSelector } from 'hooks';
import { getAuthors, getLocations } from 'store/paintings/selectors';

export const Painting: FC<PaintingPropsType> = memo(({ painting }: PaintingPropsType) => {
  const authors = useAppSelector(getAuthors);
  const locations = useAppSelector(getLocations);
  const currentAuthor = authors.find(author => author.id === painting.authorId);
  const currentLocation = locations.find(location => location.id === painting.authorId);

  return (
    <div className={style.wrapper}>
      <div className={style.description}>
        <h2>{painting.name}</h2>
        <div className={style.subDescription}>
          <b>Author: </b>
          {currentAuthor ? currentAuthor.name : 'Name unknown'}
        </div>
        <div className={style.subDescription}>
          <b>Created: </b>
          {painting.created}
        </div>
        <div className={style.subDescription}>
          <b>Location: </b>
          {currentLocation ? currentLocation.location : 'Location unknown'}
        </div>
      </div>
      <img
        className={style.paintings}
        src={`https://test-front.framework.team/${painting.imageUrl}`}
        alt={painting.name}
      />
    </div>
  );
});
