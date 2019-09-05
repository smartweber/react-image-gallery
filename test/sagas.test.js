import { put, takeEvery } from 'redux-saga/effects';
import { fetchPhotoList, loadPhotoList } from '../src/sagas/index';
import { RENDER_PHOTO_LIST, LOAD_PHOTO_LIST } from '../src/actions';

describe('SAGAS', () => {
  it('should dispatch action "LOAD_PHOTO_LIST" ', () => {
    const generator = loadPhotoList();
    expect(generator.next().value)
      .toEqual(takeEvery(LOAD_PHOTO_LIST, fetchPhotoList));
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "RENDER_PHOTO_LIST" with result from fetch Photos API', () => {
    const mockResponse = [
      {
        id: 1,
        name: 'photo1'
      },
      {
        id: 2,
        name: 'photo2'
      }
    ];
    const generator = fetchPhotoList();
    generator.next();

    expect(generator.next(mockResponse).value)
      .toEqual(put({ type: RENDER_PHOTO_LIST, photoList: mockResponse }))
    expect(generator.next().done).toBeTruthy();
  });
});