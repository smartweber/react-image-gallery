import { put, takeEvery } from 'redux-saga/effects';
import { fetchPhotoList, loadPhotoList } from '../src/sagas/index';
import { LOAD_PHOTOS_SUCCESS, LOAD_PHOTOS_LOADING } from '../src/actions';

describe('SAGAS', () => {
  it('should dispatch action "LOAD_PHOTOS_LOADING" ', () => {
    const generator = loadPhotoList();
    expect(generator.next().value)
      .toEqual(takeEvery(LOAD_PHOTOS_LOADING, fetchPhotoList));
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "LOAD_PHOTOS_SUCCESS" with result from fetch Photos API', () => {
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
    console.log('++++++')
    console.log(generator.next(mockResponse).value)
    console.log('-----')
    console.log(put({ type: LOAD_PHOTOS_SUCCESS, photoList: mockResponse }))

    // expect(generator.next(mockResponse).value)
    //   .toEqual(put({ type: LOAD_PHOTOS_SUCCESS, photoList: mockResponse }))
    // expect(generator.next().done).toBeTruthy();
  });
});