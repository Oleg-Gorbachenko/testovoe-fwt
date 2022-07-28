import { AppStateType } from './types';

import { AuthorsType, LocationsType, PaintingsDescriptionType } from 'utils/api/types';

export const getIsLoading = (state: AppStateType): boolean => state.paintings.isLoading;
export const getAuthors = (state: AppStateType): AuthorsType[] => state.paintings.authors;
export const getLocations = (state: AppStateType): LocationsType[] =>
  state.paintings.locations;
export const getCurrentPaintingsArray = (
  state: AppStateType,
): PaintingsDescriptionType[] => state.paintings.currentPaintings;
export const getPaintingsDescription = (
  state: AppStateType,
): PaintingsDescriptionType[] => state.paintings.paintingsDescription;
export const getCurrentPage = (state: AppStateType): number =>
  state.paintings.currentPage;
export const getPageSize = (state: AppStateType): number => state.paintings.pageSize;
export const getCurrentTheme = (state: AppStateType): string =>
  state.paintings.currentTheme;
export const getFilterByAuthor = (state: AppStateType): string =>
  state.paintings.filterByAuthor;
export const getFilterByLocation = (state: AppStateType): string =>
  state.paintings.filterByLocation;
