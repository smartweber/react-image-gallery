import {
  // put,
  takeLatest
} from 'redux-saga/effects';
import { fetchAllPhoto, loadAllPhotos } from '../src/sagas/index';
import {
  // LOAD_PHOTOS_SUCCESS,
  LOAD_ALL_PHOTOS } from '../src/actions';

describe('SAGAS', () => {
  it('should dispatch action "LOAD_ALL_PHOTOS" ', () => {
    const generator = loadAllPhotos();
    expect(generator.next().value)
      .toEqual(takeLatest(LOAD_ALL_PHOTOS, fetchAllPhoto));
    expect(generator.next().done).toBeTruthy();
  });

  // it('should dispatch action "LOAD_PHOTOS_SUCCESS" with result from fetch Photos API', () => {
  //   const mockResponse = [
  //     {
  //       id: 1,
  //       name: 'photo1'
  //     },
  //     {
  //       id: 2,
  //       name: 'photo2'
  //     }
  //   ];
  //   const generator = fetchPhotoList();
  //   generator.next();

  //   expect(generator.next(mockResponse).value)
  //     .toEqual(put({ type: LOAD_PHOTOS_SUCCESS, photoList: mockResponse }))
  //   expect(generator.next().done).toBeTruthy();
  // });
});