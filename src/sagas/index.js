import { all, put, takeEvery } from 'redux-saga/effects';
import { LOAD_PHOTOS_LOADING, RENDER_PHOTO_LIST } from '../actions';

export function* fetchPhotoList() {
  const API_URL = 'https://jsonplaceholder.typicode.com/photos';
  try {
    const response = yield fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          return process.on('unhandledRejection', (_, promise) => {
            console.log('ERROR', data.error);
            promise.reject([]);
          });
        }

        return Promise.resolve(data);
      })
      .catch(error =>
        process.on('unhandledRejection', (_, promise) => {
          console.log(
            'ERROR',
            typeof error === 'string' ? Error(error) : Error(error.message)
          );
          promise.reject([]);
        })
      );

    yield put({ type: RENDER_PHOTO_LIST, photoList: response });
  } catch (e) {
    console.log('ERROR', e);
    yield put({ type: RENDER_PHOTO_LIST, photoList: [] });
  }
}

export function* loadPhotoList() {
  yield takeEvery(LOAD_PHOTOS_LOADING, fetchPhotoList);
}

export default function* rootSaga() {
  yield all([loadPhotoList()]);
}
