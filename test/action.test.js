import * as actions from '../src/actions/index';

describe('ACTIONS', () => {
  it('should create triggerFavorite action by triggerFavorite', () => {
    const expectedAction = {
      type: actions.TRIGGER_FAVORITE,
      triggerPhotoId: 1
    }
    expect(actions.triggerFavorite(1)).toEqual(expectedAction);
  });

  it('should create loadPhotoList action by loadPhotoList', () => {
    const expectedAction = {
      type: actions.LOAD_PHOTO_LIST
    }
    expect(actions.loadPhotoList()).toEqual(expectedAction);
  });
});
