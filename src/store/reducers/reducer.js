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
  console.log(data.results);
  return updateObject(state, {
    loading: false,
    albums: data.results.map(a => {
      console.log(a);
      const { artistName, collectionName, artworkUrl100, collectionId } = a;
      return {
        artist: artistName,
        album: collectionName,
        imageUrl: artworkUrl100,
        id: collectionId
      };
    })
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
