import * as actionTypes from './actionTypes';
import axios from '../../fetchConfig/fetchconfig';

const getAlbumsStart = () => {
  return {
    type: actionTypes.GET_ALBUMS_START
  };
};

const getAlbumsSuccess = () => {
  return {
    type: actionTypes.GET_ALBUMS_SUCCESS
  };
};

const getAlbumsFail = () => {
  return {
    type: actionTypes.GET_ALBUMS_FAIL
  };
};

export const getAlbums = ({ query }) => {
  return dispatch => {
    dispatch(getAlbumsStart());
    axios
      .get('/search', {})
      .then(res => {
        dispatch(getAlbumsSuccess(res));
      })
      .catch(err => {
        dispatch(getAlbumsFail(err));
      });
  };
};
