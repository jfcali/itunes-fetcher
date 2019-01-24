import * as actionTypes from './actionTypes';
import instance from '../../fetchConfig/fetchconfig';

const getAlbumsStart = () => {
  return {
    type: actionTypes.GET_ALBUMS_START
  };
};

const getAlbumsSuccess = ({ data }) => {
  return {
    type: actionTypes.GET_ALBUMS_SUCCESS,
    data
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
    instance
      .get('https://itunes.apple.com/search', {
        params: {
          term: query,
          entity: 'album',
          limit: 200
        }
      })
      .then(res => {
        dispatch(getAlbumsSuccess({ data: res.data }));
      })
      .catch(err => {
        dispatch(getAlbumsFail(err));
      });
  };
};

export const goToNavigation = ({ index }) => {
  return {
    type: actionTypes.GOT_TO_NAV,
    index
  };
};
