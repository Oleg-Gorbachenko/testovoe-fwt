import {
  isLoading,
  setAuthors,
  setCurrentPage,
  setCurrentPaintings,
  setFilterByAuthor,
  setFilterByLocation,
  setLocations,
  setPaintingsDescription,
} from './actions';
import { AppThunkType } from './types';

import { paintingsAPI } from 'utils/api/api';

export const getPaintingsData = (): AppThunkType => async dispatch => {
  dispatch(isLoading(true));
  try {
    const descriptions = await paintingsAPI.fetchPaintingsDescription();

    dispatch(setPaintingsDescription(descriptions));

    const authors = await paintingsAPI.fetchAuthors();

    dispatch(setAuthors(authors));

    const locations = await paintingsAPI.fetchLocations();

    dispatch(setLocations(locations));
  } catch (err: any) {
    throw new Error(err);
  } finally {
    dispatch(isLoading(false));
  }
};

export const getCurrentPaintings =
  (pageNumber: string): AppThunkType =>
  async dispatch => {
    dispatch(isLoading(true));
    try {
      const paintings = await paintingsAPI.fetchCurrentPaintings(pageNumber);

      dispatch(setCurrentPaintings(paintings));
      dispatch(setCurrentPage(+pageNumber));
    } catch (err: any) {
      throw new Error(err);
    } finally {
      dispatch(isLoading(false));
    }
  };

export const searchPaintingsById =
  (pageNumber: string, searchId: string): AppThunkType =>
  async dispatch => {
    dispatch(isLoading(true));
    try {
      const paintings = await paintingsAPI.fetchPaintingsById(pageNumber, searchId);

      dispatch(setCurrentPaintings(paintings));
      dispatch(setPaintingsDescription(paintings));
      dispatch(setCurrentPage(+pageNumber));
    } catch (err: any) {
      throw new Error(err);
    } finally {
      dispatch(isLoading(false));
    }
  };

export const fetchPaintingsByString =
  (pageNumber: string, value: string): AppThunkType =>
  async dispatch => {
    dispatch(isLoading(true));
    try {
      const paintings = await paintingsAPI.fetchPaintingsByString(pageNumber, value);

      dispatch(setCurrentPaintings(paintings));
      dispatch(setPaintingsDescription(paintings));
      dispatch(setCurrentPage(+pageNumber));
    } catch (err: any) {
      throw new Error(err);
    } finally {
      dispatch(isLoading(false));
    }
  };

export const resetFilter =
  (pageNumber: string): AppThunkType =>
  async dispatch => {
    dispatch(isLoading(true));
    try {
      const descriptions = await paintingsAPI.fetchPaintingsDescription();

      dispatch(setPaintingsDescription(descriptions));

      const paintings = await paintingsAPI.fetchCurrentPaintings(pageNumber);

      dispatch(setCurrentPaintings(paintings));
      dispatch(setCurrentPage(+pageNumber));
      dispatch(setFilterByAuthor(''));
      dispatch(setFilterByLocation(''));
    } catch (err: any) {
      throw new Error(err);
    } finally {
      dispatch(isLoading(false));
    }
  };
