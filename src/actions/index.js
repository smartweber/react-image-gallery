export const LOAD_PAGE_PHOTOS = 'LOAD_PAGE_PHOTOS';
export const LOAD_PAGE_PHOTOS_SUCCESS = 'LOAD_PAGE_PHOTOS_SUCCESS';
export const LOAD_PHOTOS_FAIL = 'LOAD_PHOTOS_FAIL';
export const TRIGGER_FAVORITE = 'TRIGGER_FAVORITE';

export function triggerFavorite(triggerPhotoId) {
  return {
    type: TRIGGER_FAVORITE,
    triggerPhotoId
  };
}

export function loadPagePhotos(page, limit) {
  return {
    type: LOAD_PAGE_PHOTOS,
    page,
    limit
  };
}
