import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_PHOTO_LIST, RENDER_PHOTO_LIST } from '../actions';

export function* fetchPhotoList() {
  const endpoint = 'https://jsonplaceholder.typicode.com/photos';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_PHOTO_LIST, photoList: data });
}

export function* loadPhotoList() {
  yield takeEvery(LOAD_PHOTO_LIST, fetchPhotoList);
}

export default function* rootSaga() {
  yield all([loadPhotoList()]);
}
