import {
  put,
  takeLatest
} from 'redux-saga/effects';
import { fetchPagePhoto, loadPagePhotos } from '../src/sagas/index';
import {
  LOAD_PAGE_PHOTOS_SUCCESS,
  LOAD_PAGE_PHOTOS } from '../src/actions';

describe('SAGAS', () => {
  it('should dispatch action "LOAD_PAGE_PHOTOS" ', () => {
    const generator = loadPagePhotos();
    expect(generator.next().value)
      .toEqual(takeLatest(LOAD_PAGE_PHOTOS, fetchPagePhoto));
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "LOAD_PAGE_PHOTOS_SUCCESS" with result from fetch Photos API', () => {
    const mockResponse = [
      {
        id: 1,
        title: 'photo1'
      }
    ];
    const generator = fetchPagePhoto({page: 1, limit: 10});
    generator.next();

    expect(generator.next({data: mockResponse}).value)
      .toMatchObject(put({ type: LOAD_PAGE_PHOTOS_SUCCESS, photoList: mockResponse }))
    expect(generator.next().done).toBeTruthy();
  });
});