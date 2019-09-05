import _ from 'lodash';
import { RENDER_PHOTO_LIST, TRIGGER_FAVORITE } from '../actions';

const initialState = {
  photoList: [],
  favoritePhotos: {}
};

export default function photoApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_PHOTO_LIST:
      return {
        ...state,
        photoList: action.photoList
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