import reducer from '../src/reducers/index';
import { LOAD_PHOTOS_LOADING, RENDER_PHOTO_LIST, TRIGGER_FAVORITE } from '../src/actions';

describe('REDUCER', () => {
  it('should return the initial state', () => {
    const initialState = {
      photoList: [],
      favoritePhotos: {}
    };
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should change state\'s loading to true by "LOAD_PHOTOS_LOADING" action', () => {
    const initialState = {
      loading: false,
      photoList: [],
      favoritePhotos: {}
    };
    const renderPhotoLoadingAction = {
      type: LOAD_PHOTOS_LOADING,
      loading: false
    };
    expect(reducer(initialState, renderPhotoLoadingAction)).toEqual({
      loading: true,
      photoList: [],
      favoritePhotos: {}
    });
  });

  it('should update state\'s photoList by "RENDER_PHOTO_LIST" action', () => {
    const initialState = {
      loading: false,
      photoList: [],
      favoritePhotos: {}
    };
    const data = [
      {
        id: 1,
        name: 'image1'
      }
    ];
    const renderPhotoListAction = {
      type: RENDER_PHOTO_LIST,
      loading: false,
      photoList: data
    };
    expect(reducer(initialState, renderPhotoListAction)).toEqual({
      loading: false,
      photoList: data,
      favoritePhotos: {}
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
