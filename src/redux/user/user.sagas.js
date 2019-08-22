import { takeLatest, put, call, all } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { googleProvider, auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { googleSignInSuccess, googleSiginFailure } from '../../redux/user/user.actions';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();
    yield put(googleSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(googleSiginFailure(error));
  }
}

export function* onGoogleSiginStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([
    call(onGoogleSiginStart)
  ]);
}