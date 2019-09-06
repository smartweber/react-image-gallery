import reducer from '../src/reducers/index';
import { 
  LOAD_PHOTOS_LOADING,
  LOAD_PHOTOS_SUCCESS,
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

  it('should change state\'s loading to true by "LOAD_PHOTOS_LOADING" action', () => {
    const initialState = {
      loading: false,
      isError: false,
      photoList: [],
      favoritePhotos: {}
    };
    const loadingPhotosAction = {
      type: LOAD_PHOTOS_LOADING
    };
    expect(reducer(initialState, loadingPhotosAction)).toEqual({
      loading: true,
      isError: false,
      photoList: [],
      favoritePhotos: {}
    });
  });

  it('should update state\'s photoList and set isError to true by "LOAD_PHOTOS_SUCCESS" action', () => {
    const initialState = {
      loading: true,
      isError: true,
      photoList: [],
      favoritePhotos: {}
    };
    const data = [
      {
        id: 1,
        name: 'image1'
      }
    ];
    const loadPhotoSuccessAction = {
      type: LOAD_PHOTOS_SUCCESS,
      photoList: data
    };
    expect(reducer(initialState, loadPhotoSuccessAction)).toEqual({
      loading: false,
      isError: false,
      photoList: data,
      favoritePhotos: {}
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
