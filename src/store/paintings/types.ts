import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { rootReducer } from '../index';

import {
  setCurrentPaintings,
  setPaintingsDescription,
  isLoading,
  setAuthors,
  setLocations,
  setCurrentPage,
  changeTheme,
  setFilterByAuthor,
  setFilterByLocation,
} from './actions';
import { initState } from './reducer';

export type AppStateType = ReturnType<typeof rootReducer>;
export type RootActionsType = PaintingsActionsType;

export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  RootActionsType
>;

export type AppDispatchType = ThunkDispatch<AppStateType, unknown, RootActionsType>;

type SetPaintingsDescriptionsActionType = ReturnType<typeof setPaintingsDescription>;
type IsLoadingActionType = ReturnType<typeof isLoading>;
type SetCurrentPaintingsActionType = ReturnType<typeof setCurrentPaintings>;
type SetAuthorsActionType = ReturnType<typeof setAuthors>;
type SetLocationsActionType = ReturnType<typeof setLocations>;
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>;
type ChangeThemeActionType = ReturnType<typeof changeTheme>;
type SetFilterByAuthorActionType = ReturnType<typeof setFilterByAuthor>;
type SetFilterByLocationActionType = ReturnType<typeof setFilterByLocation>;
export type PaintingsActionsType =
  | SetPaintingsDescriptionsActionType
  | IsLoadingActionType
  | SetAuthorsActionType
  | SetLocationsActionType
  | SetCurrentPageActionType
  | ChangeThemeActionType
  | SetFilterByAuthorActionType
  | SetFilterByLocationActionType
  | SetCurrentPaintingsActionType;

export type InitStateType = typeof initState;
