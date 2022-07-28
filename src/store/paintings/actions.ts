import { AuthorsType, LocationsType, PaintingsDescriptionType } from 'utils/api/types';

export const SET_PAINTINGS_DESCRIPTION = 'paintings/SET-PAINTINGS-DESCRIPTION';
export const IS_LOADING = 'paintings/IS-LOADING';
export const SET_CURRENT_PAINTINGS = 'paintings/SET-CURRENT-PAINTINGS';
export const SET_AUTHORS = 'paintings/SET-AUTHORS';
export const SET_LOCATIONS = 'paintings/SET-LOCATIONS';
export const SET_CURRENT_PAGE = 'paintings/SET-CURRENT-PAGE';
export const CHANGE_THEME = 'paintings/CHANGE-THEME';
export const SET_FILTER_BY_AUTHOR = 'paintings/SET-SET_FILTER-BY-AUTHOR';
export const SET_FILTER_BY_LOCATION = 'paintings/SET-SET_FILTER-BY-LOCATION';

export const setPaintingsDescription = (
  paintingsDescription: Array<PaintingsDescriptionType>,
) =>
  ({
    type: SET_PAINTINGS_DESCRIPTION,
    payload: { paintingsDescription },
  } as const);
export const isLoading = (isLoading: boolean) =>
  ({
    type: IS_LOADING,
    payload: { isLoading },
  } as const);
export const setCurrentPaintings = (currentPaintings: Array<PaintingsDescriptionType>) =>
  ({
    type: SET_CURRENT_PAINTINGS,
    payload: { currentPaintings },
  } as const);
export const setAuthors = (authors: Array<AuthorsType>) =>
  ({
    type: SET_AUTHORS,
    payload: { authors },
  } as const);
export const setLocations = (locations: Array<LocationsType>) =>
  ({
    type: SET_LOCATIONS,
    payload: { locations },
  } as const);
export const setCurrentPage = (currentPage: number) =>
  ({
    type: SET_CURRENT_PAGE,
    payload: { currentPage },
  } as const);
export const changeTheme = (nextTheme: string) =>
  ({
    type: CHANGE_THEME,
    nextTheme,
  } as const);
export const setFilterByAuthor = (filterByAuthor: string) =>
  ({
    type: SET_FILTER_BY_AUTHOR,
    payload: { filterByAuthor },
  } as const);
export const setFilterByLocation = (filterByLocation: string) =>
  ({
    type: SET_FILTER_BY_LOCATION,
    payload: { filterByLocation },
  } as const);
