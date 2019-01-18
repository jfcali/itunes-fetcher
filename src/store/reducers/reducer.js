import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  albums: [],
  totalPages: 1,
  albumsPerPage: 20
};

const getAlbumsStart = state => {
  return updateObject(state, {
    loading: true
  });
};

const getAlbumsSuccess = (state, data) => {
  return updateObject(state, {
    loading: false
  });
};

const getAlbumsFail = (state, error) => {
  return updateObject(state, {
    loading: false,
    error: true,
    errorMessage: error
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALBUMS_START:
      return getAlbumsStart(state);
    case actionTypes.GET_ALBUMS_SUCCESS:
      return getAlbumsSuccess(state, action.data);
    case actionTypes.GET_ALBUMS_FAIL:
      return getAlbumsFail(state, action.error);
    default:
      return state;
  }
};

export default reducer;
