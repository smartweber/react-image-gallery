import { RENDER_PHOTO_LIST } from '../actions';

const initialState = {
  photoList: []
};

export default function photoApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_PHOTO_LIST:
      return {
        ...state,
        photoList: action.photoList
      };
    default:
      return state;
  }
}