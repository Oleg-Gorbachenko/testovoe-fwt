import React, { FC, memo } from 'react';

import style from './style/Paginator.module.sass';
import { PaginatorPropsType } from './types';

import vectorBlackDouble from 'common/images/double_vector_dark.png';
import vectorWhiteDouble from 'common/images/double_vector_light.png';
import vectorBlack from 'common/images/vector_dark.png';
import vectorWhite from 'common/images/vector_light.png';
import { useAppSelector } from 'hooks';
import { getCurrentTheme } from 'store/paintings/selectors';

export const Paginator: FC<PaginatorPropsType> = memo(
  ({ pageSize, totalPaintingsCount, currentPage, onPageChanged }: PaginatorPropsType) => {
    const currentTheme = useAppSelector(getCurrentTheme);
    let finalPaginatorClassName = style.paginator;
    let finalPageClassName = style.pageNumber;
    let finalActivePageNumberClassName = style.activePageNumber;
    let finalVectorClassName = style.vector;
    let finalVector = vectorWhite;
    let finalDoubleVector = vectorWhiteDouble;

    if (currentTheme === 'light') {
      finalPaginatorClassName = `${style.paginator} ${style.paginatorLight}`;
      finalPageClassName = `${style.pageNumber} ${style.pageNumberLight}`;
      finalActivePageNumberClassName = `${style.activePageNumber} ${style.activePageNumberLight}`;
      finalVectorClassName = `${style.vector} ${style.vectorLight}`;
      finalVector = vectorBlack;
      finalDoubleVector = vectorBlackDouble;
    }

    const pagesCount = Math.ceil(totalPaintingsCount / pageSize);

    const pages = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className={finalPaginatorClassName}>
        <button
          type="button"
          className={finalVectorClassName}
          disabled={currentPage === 1}
          onClick={() => {
            onPageChanged(1);
          }}
        >
          <img src={finalDoubleVector} alt="lastPage" />
        </button>
        <button
          type="button"
          className={finalVectorClassName}
          disabled={currentPage === 1}
          onClick={() => {
            onPageChanged(currentPage - 1);
          }}
        >
          <img src={finalVector} alt="prevPage" />
        </button>
        {pages.map(p => (
          <span
            role="presentation"
            className={
              p === currentPage ? finalActivePageNumberClassName : finalPageClassName
            }
            key={p}
            onClick={() => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
        <button
          type="button"
          className={finalVectorClassName}
          disabled={currentPage >= pages.length}
          onClick={() => {
            onPageChanged(currentPage + 1);
          }}
        >
          <img src={finalVector} alt="nextPage" />
        </button>
        <button
          type="button"
          className={finalVectorClassName}
          disabled={currentPage >= pages.length}
          onClick={() => {
            onPageChanged(pages.length);
          }}
        >
          <img src={finalDoubleVector} alt="lastPage" />
        </button>
      </div>
    );
  },
);
