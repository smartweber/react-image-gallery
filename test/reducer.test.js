import reducer from '../src/reducers/index';
import { RENDER_PHOTO_LIST, TRIGGER_FAVORITE } from '../src/actions';

describe('REDUCER', () => {
  it('should return the initial state', () => {
    const initialState = {
      photoList: [],
      favoritePhotos: {}
    };
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should update state\'s photoList by "RENDER_PHOTO_LIST" action', () => {
    const initialState = {
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
      photoList: data
    };
    expect(reducer(initialState, renderPhotoListAction)).toEqual({
      photoList: data,
      favoritePhotos: {}
    });
  });

  it('should update state\'s favoritePhotos by "TRIGGER_FAVORITE" action', () => {
    const initialState = {
      photoList: [],
      favoritePhotos: {}
    };
    const triggerFavoriteAction = {
      type: TRIGGER_FAVORITE,
      triggerPhotoId: 1
    };
    expect(reducer(initialState, triggerFavoriteAction)).toEqual({
      photoList: [],
      favoritePhotos: { '1': true }
    });
  });
});
