import _ from 'lodash';
import {
  LOAD_PHOTOS_LOADING,
  RENDER_PHOTO_LIST,
  TRIGGER_FAVORITE
} from '../actions';

const initialState = {
  loading: false,
  photoList: [],
  favoritePhotos: {}
};

export default function photoApp(state = initialState, action) {
  switch (action.type) {
    case LOAD_PHOTOS_LOADING:
      return {
        ...state,
        loading: true
      };
    case RENDER_PHOTO_LIST:
      return {
        ...state,
        loading: false,
        photoList: action.photoList,
        isLoadPhotos: action.isLoadPhotos
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
