import * as actions from '../src/actions/index';

describe('ACTIONS', () => {
  it('should create triggerFavorite action by triggerFavorite', () => {
    const expectedAction = {
      type: actions.TRIGGER_FAVORITE,
      triggerPhotoId: 1
    }
    expect(actions.triggerFavorite(1)).toEqual(expectedAction);
  });

  it('should create loadAllPhotos action by loadAllPhotos', () => {
    const expectedAction = {
      type: actions.LOAD_ALL_PHOTOS
    }
    expect(actions.loadAllPhotos()).toEqual(expectedAction);
  });

  it('should create loadPagePhotos action by loadPagePhotos', () => {
    const expectedAction = {
      type: actions.LOAD_PAGE_PHOTOS,
      page: 1,
      limit: 10
    }
    expect(actions.loadPagePhotos(1, 10)).toEqual(expectedAction);
  });
});
