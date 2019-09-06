import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  LOAD_PAGE_PHOTOS,
  LOAD_PAGE_PHOTOS_SUCCESS,
  LOAD_PHOTOS_FAIL
} from '../actions';
import { getPhotos } from '../services';

export function* fetchPagePhoto(action) {
  try {
    const result = yield call(getPhotos, action.page, action.limit);
    yield put({
      type: LOAD_PAGE_PHOTOS_SUCCESS,
      photoList: result.data,
      totalCount: result.totalCount
    });
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
