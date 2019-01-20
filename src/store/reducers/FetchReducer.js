import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  albums: [],
  totalPages: 1,
  currentPage: 1,
  albumsPerPage: 6,
  albumShortlist: []
};

const getAlbumsStart = state => {
  return updateObject(state, {
    loading: true,
    albums: []
  });
};

const getAlbumsSuccess = (state, data) => {
  const updatedTotalPages =
    data.results.length < state.albumsPerPage
      ? 1
      : Math.round(data.results.length / state.albumsPerPage);

  return updateObject(state, {
    totalPages: updatedTotalPages,
    loading: false,
    currentPage: 1,
    albums: data.results.map(a => {
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

const setCurrentPage = (state, index) => {
  let newIndex = index;
  if (newIndex <= 0) {
    newIndex = state.totalPages;
  } else if (newIndex > state.totalPages) {
    newIndex = 1;
  }

  return updateObject(state, {
    currentPage: newIndex
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
    case actionTypes.GOT_TO_NAV:
      return setCurrentPage(state, action.index);
    default:
      return state;
  }
};

export default reducer;
