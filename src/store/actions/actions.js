import * as actionTypes from './actionTypes';

export const getAlbumsStart = () => {
  return {
    type: actionTypes.GET_ALBUMS_START
  };
};

export const getAlbumsSuccess = () => {
  return {
    type: actionTypes.GET_ALBUMS_SUCCESS
  };
};

export const getAlbumsFail = () => {
  return {
    type: actionTypes.GET_ALBUMS_FAIL
  };
};
