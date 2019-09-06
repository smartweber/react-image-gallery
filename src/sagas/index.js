import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  LOAD_PAGE_PHOTOS,
  LOAD_PAGE_PHOTOS_SUCCESS,
  LOAD_PHOTOS_FAIL
} from '../actions';
import * as API from '../services';

export function* fetchPagePhoto(action) {
  const API_URL = `https://jsonplaceholder.typicode.com/photos?_page=${action.page}&_limit=${action.limit}`;

  try {
    const response = yield call(API.get, API_URL);
    if (response.status >= 200 && response.status < 300) {
      const photoList = response.data;
      const totalCount = response.headers['x-total-count']
        ? parseInt(response.headers['x-total-count'])
        : 0;

      yield put({ type: LOAD_PAGE_PHOTOS_SUCCESS, photoList, totalCount });
    } else {
      throw new Error('Unknow status');
    }
  } catch (error) {
    yield put({
      type: LOAD_PHOTOS_FAIL,
      errorMessage: error.message || 'Api error'
    });
  }
}

export function* loadPagePhotos() {
  yield takeLatest(LOAD_PAGE_PHOTOS, fetchPagePhoto);
}

export default function* rootSaga() {
  yield all([loadPagePhotos()]);
}
