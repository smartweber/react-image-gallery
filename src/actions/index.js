export const LOAD_PHOTOS_LOADING = 'LOAD_PHOTOS_LOADING';
export const RENDER_PHOTO_LIST = 'RENDER_PHOTO_LIST';
export const TRIGGER_FAVORITE = 'TRIGGER_FAVORITE';

export function triggerFavorite(triggerPhotoId) {
  return {
    type: TRIGGER_FAVORITE,
    triggerPhotoId
  };
}

export function loadPhotoList() {
  return {
    type: LOAD_PHOTOS_LOADING
  };
}
