import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  LOAD_ALL_PHOTOS,
  LOAD_PAGE_PHOTOS,
  LOAD_ALL_PHOTOS_SUCCESS,
  LOAD_PAGE_PHOTOS_SUCCESS,
  LOAD_PHOTOS_FAIL
} from '../actions';

export function* fetchAllPhoto() {
  const API_URL = 'https://jsonplaceholder.typicode.com/photos';

  try {
    const response = yield call(fetch, API_URL);
    if (response.status >= 200 && response.status < 300) {
      const photoList = yield response.json();

      yield put({
        type: LOAD_ALL_PHOTOS_SUCCESS,
        totalPhotos: photoList.length
      });
    } else {
      throw response;
    }
  } catch (e) {
    console.log('ERROR', e);
    yield put({ type: LOAD_PHOTOS_FAIL, errorMessage: 'Api error' });
  }
}

export function* fetchPagePhoto(action) {
  const API_URL = `https://jsonplaceholder.typicode.com/photos?_page=${action.page}&_limit=${action.limit}`;

  try {
    const response = yield call(fetch, API_URL);
    if (response.status >= 200 && response.status < 300) {
      const photoList = yield response.json();

      yield put({ type: LOAD_PAGE_PHOTOS_SUCCESS, photoList });
    } else {
      throw response;
    }
  } catch (e) {
    console.log('ERROR', e);
    yield put({ type: LOAD_PHOTOS_FAIL, errorMessage: 'Api error' });
  }
}

export function* loadAllPhotos() {
  yield takeLatest(LOAD_ALL_PHOTOS, fetchAllPhoto);
}

export function* loadPagePhotos() {
  yield takeLatest(LOAD_PAGE_PHOTOS, fetchPagePhoto);
}

export default function* rootSaga() {
  yield all([loadAllPhotos(), loadPagePhotos()]);
}
