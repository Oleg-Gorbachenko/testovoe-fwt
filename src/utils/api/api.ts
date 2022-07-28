import { axiosConfig } from './apiConfig';
import { AuthorsType, LocationsType, PaintingsDescriptionType } from './types';

export const paintingsAPI = {
  fetchPaintingsDescription() {
    return axiosConfig
      .get<Array<PaintingsDescriptionType>>('paintings')
      .then(response => response.data);
  },
  fetchAuthors() {
    return axiosConfig.get<Array<AuthorsType>>('authors').then(response => response.data);
  },
  fetchLocations() {
    return axiosConfig
      .get<Array<LocationsType>>('locations')
      .then(response => response.data);
  },
  fetchCurrentPaintings(pageNumber: string) {
    return axiosConfig
      .get<Array<PaintingsDescriptionType>>(`paintings?_page=${pageNumber}&_limit=12`)
      .then(response => response.data);
  },
  fetchPaintingsById(pageNumber: string, searchId: string) {
    return axiosConfig
      .get<Array<PaintingsDescriptionType>>(
        `paintings?_page=${pageNumber}&_limit=12&id=${searchId}`,
      )
      .then(response => response.data);
  },
  fetchPaintingsByString(pageNumber: string, value: string) {
    return axiosConfig
      .get<Array<PaintingsDescriptionType>>(
        `paintings?_page=${pageNumber}&_limit=12&q=${value}`,
      )
      .then(response => response.data);
  },
};
