import reducer from './FetchReducer';
import { initialState } from './FetchReducer';
import * as actionTypes from '../actions/actionTypes';

describe('FetchReducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe(actionTypes.GET_ALBUMS_START, () => {
    it('should set a loading state', () => {
      const newReducer = reducer(initialState, {
        type: actionTypes.GET_ALBUMS_START
      });
      expect(newReducer.loading).toBe(true);
      expect(newReducer.error).toBe(false);
    });
  });

  describe(actionTypes.GET_ALBUMS_FAIL, () => {
    it('should be done loading and display an error message', () => {
      const newReducer = reducer(initialState, {
        type: actionTypes.GET_ALBUMS_FAIL
      });
      expect(newReducer.loading).toBe(false);
      expect(newReducer.error).toBe(true);
    });
  });

  describe(actionTypes.GET_ALBUMS_SUCCESS, () => {
    it('should set a loaded state', () => {
      const newReducer = reducer(initialState, {
        type: actionTypes.GET_ALBUMS_SUCCESS,
        data: {
          results: []
        }
      });
      expect(newReducer.loading).toEqual(false);
      expect(newReducer.initialLoad).toEqual(true);
    });

    it('should set albums', () => {
      const newReducer = reducer(initialState, {
        type: actionTypes.GET_ALBUMS_SUCCESS,
        data: {
          results: new Array(initialState.albumsPerPage - 1)
        }
      });
      expect(newReducer.albums).toHaveLength(1);
      expect(newReducer.totalPages).toEqual(1);
    });

    it('should have two groups of albums', () => {
      const newReducer = reducer(initialState, {
        type: actionTypes.GET_ALBUMS_SUCCESS,
        data: {
          results: new Array(initialState.albumsPerPage + 1)
        }
      });

      expect(newReducer.albums).toHaveLength(2);
      expect(newReducer.totalPages).toEqual(2);
    });
  });

  describe(actionTypes.GOT_TO_NAV, () => {
    const newReducer = reducer(initialState, {
      type: actionTypes.GET_ALBUMS_SUCCESS,
      data: {
        results: new Array(initialState.albumsPerPage * 10)
      }
    });
    it('go to index', () => {
      const currentReducer = reducer(newReducer, {
        type: actionTypes.GOT_TO_NAV,
        index: 4
      });

      expect(currentReducer.currentPage).toEqual(4);
    });
  });

  describe(`${
    actionTypes.GOT_TO_NAV
  } - it should handle unexisting target`, () => {
    const newReducer = reducer(initialState, {
      type: actionTypes.GET_ALBUMS_SUCCESS,
      data: {
        results: new Array(1)
      }
    });
    it('go to index', () => {
      const currentReducer = reducer(newReducer, {
        type: actionTypes.GOT_TO_NAV,
        index: 4
      });

      expect(currentReducer.currentPage).toEqual(1);
    });
    it('go to index', () => {
      const currentReducer = reducer(newReducer, {
        type: actionTypes.GOT_TO_NAV,
        index: -10
      });

      expect(currentReducer.currentPage).toEqual(1);
    });
  });
});
