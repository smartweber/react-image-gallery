import _ from 'lodash';
import {
  LOAD_PAGE_PHOTOS,
  LOAD_PAGE_PHOTOS_SUCCESS,
  LOAD_PHOTOS_FAIL,
  TRIGGER_FAVORITE
} from '../actions';

const initialState = {
  loading: true,
  isError: false,
  totalCount: 0,
  photoList: [],
  favoritePhotos: {},
  errorMessage: ''
};

export default function photoApp(state = initialState, action) {
  switch (action.type) {
    case LOAD_PAGE_PHOTOS:
      return {
        ...state,
        loading: true
      };
    case LOAD_PAGE_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        isError: false,
        totalCount: action.totalCount,
        photoList: action.photoList
      };
    case LOAD_PHOTOS_FAIL:
      return {
        ...state,
        loading: false,
        isError: true,
        photoList: [],
        errorMessage: action.errorMessage
      };
    case TRIGGER_FAVORITE:
      let newFavoritePhotos = _.clone(state.favoritePhotos);
      if (newFavoritePhotos[action.triggerPhotoId]) {
        delete newFavoritePhotos[action.triggerPhotoId];
      } else {
        newFavoritePhotos[action.triggerPhotoId] = true;
      }

      return {
        ...state,
        favoritePhotos: newFavoritePhotos
      };
    default:
      return state;
  }
}
