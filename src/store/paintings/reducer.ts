import {
  CHANGE_THEME,
  IS_LOADING,
  SET_AUTHORS,
  SET_CURRENT_PAGE,
  SET_CURRENT_PAINTINGS,
  SET_FILTER_BY_AUTHOR,
  SET_FILTER_BY_LOCATION,
  SET_LOCATIONS,
  SET_PAINTINGS_DESCRIPTION,
} from './actions';
import { InitStateType, PaintingsActionsType } from './types';

import { themeName } from 'common/enams';
import { AuthorsType, LocationsType, PaintingsDescriptionType } from 'utils/api/types';

export const initState = {
  paintingsDescription: [] as PaintingsDescriptionType[],
  pageSize: 12,
  currentPage: 1,
  currentPaintings: [] as PaintingsDescriptionType[],
  isLoading: false,
  authors: [] as AuthorsType[],
  locations: [] as LocationsType[],
  currentTheme: themeName.dark as string,
  filterByAuthor: '',
  filterByLocation: '',
};

export const paintingsReducer = (
  state: InitStateType = initState,
  action: PaintingsActionsType,
): InitStateType => {
  switch (action.type) {
    case SET_PAINTINGS_DESCRIPTION:
    case IS_LOADING:
    case SET_CURRENT_PAINTINGS:
    case SET_CURRENT_PAGE:
    case SET_AUTHORS:
    case SET_LOCATIONS:
    case SET_FILTER_BY_AUTHOR:
    case SET_FILTER_BY_LOCATION:
      return {
        ...state,
        ...action.payload,
      };
    case CHANGE_THEME:
      return {
        ...state,
        currentTheme: action.nextTheme,
      };
    default:
      return state;
  }
};
