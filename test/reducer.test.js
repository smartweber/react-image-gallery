import reducer from '../src/reducers/index';
import {
  LOAD_ALL_PHOTOS,
  LOAD_PAGE_PHOTOS,
  LOAD_ALL_PHOTOS_SUCCESS,
  LOAD_PAGE_PHOTOS_SUCCESS,
  LOAD_PHOTOS_FAIL,
  TRIGGER_FAVORITE
} from '../src/actions';

describe('REDUCER', () => {
  it('should return the initial state', () => {
    const initialState = {
      photoList: [],
      favoritePhotos: {}
    };
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should be in loading by "LOAD_ALL_PHOTOS" action', () => {
    const initialState = {
      loading: false,
      isError: false,
      photoList: [],
      favoritePhotos: {}
    };
    const action = {
      type: LOAD_ALL_PHOTOS
    };
    expect(reducer(initialState, action)).toEqual({
      loading: true,
      isError: false,
      photoList: [],
      favoritePhotos: {}
    });
  });

  it('should be in loading by "LOAD_PAGE_PHOTOS" action', () => {
    const initialState = {
      loading: false,
      isError: false,
      photoList: [],
      favoritePhotos: {}
    };
    const action = {
      type: LOAD_PAGE_PHOTOS
    };
    expect(reducer(initialState, action)).toEqual({
      loading: true,
      isError: false,
      photoList: [],
      favoritePhotos: {}
    });
  });

  it('should update state\'s photoList and set isError to true by "LOAD_ALL_PHOTOS_SUCCESS" action', () => {
    const initialState = {
      loading: true,
      isError: true,
      photoList: [],
      favoritePhotos: {},
      totalPhotos: 0
    };
    const action = {
      type: LOAD_ALL_PHOTOS_SUCCESS,
      totalPhotos: 6
    };
    expect(reducer(initialState, action)).toEqual({
      loading: false,
      isError: false,
      photoList: [],
      favoritePhotos: {},
      totalPhotos: 6
    });
  });

  it('should update state\'s photoList and set isError to true by "LOAD_PAGE_PHOTOS_SUCCESS" action', () => {
    const initialState = {
      loading: true,
      isError: true,
      photoList: [],
      favoritePhotos: {},
      totalPhotos: 0
    };
    const photoList = [
      {
        id: 1,
        name: 'photo1'
      }
    ];
    const action = {
      type: LOAD_PAGE_PHOTOS_SUCCESS,
      photoList
    };
    expect(reducer(initialState, action)).toEqual({
      loading: false,
      isError: false,
      photoList: photoList,
      favoritePhotos: {},
      totalPhotos: 0
    });
  });

  it('should set isError to false and set errorMessage of state by "LOAD_PHOTOS_FAIL" action', () => {
    const initialState = {
      loading: true,
      isError: false,
      photoList: [],
      favoritePhotos: {},
      errorMessage: ''
    };
    const loadPhotoFailAction = {
      type: LOAD_PHOTOS_FAIL,
      errorMessage: 'error'
    };
    expect(reducer(initialState, loadPhotoFailAction)).toEqual({
      loading: false,
      isError: true,
      photoList: [],
      favoritePhotos: {},
      errorMessage: 'error'
    });
  });

  it('should update state\'s favoritePhotos by "TRIGGER_FAVORITE" action', () => {
    const initialState = {
      loading: false,
      photoList: [],
      favoritePhotos: {}
    };
    const triggerFavoriteAction = {
      type: TRIGGER_FAVORITE,
      triggerPhotoId: 1
    };
    expect(reducer(initialState, triggerFavoriteAction)).toEqual({
      loading: false,
      photoList: [],
      favoritePhotos: { '1': true }
    });
  });
});
