import { 
    takeLatest,
    put,
    all,
    call
} from 'redux-saga/effects';
import UserActionTypes from './user.types';
import { 
    auth,
    googleProvider,
    createUserProfileDocument,
    getCurrentUser,
} from '../../firebase/firebase.utils';
import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure
} from './user.actions';


export function* userSnapshot(userAuth, additionalData) {
    try{
        const userRef = yield call(createUserProfileDocument,userAuth,additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))    
    }
    catch(error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield userSnapshot(user);
    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithEmailAndPassword({payload:{email, password}}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email,password);
        yield userSnapshot(user);
    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield userSnapshot(userAuth);
    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* SignOut() {
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(error) {
        yield put(signOutFailure(error));
    }
}

export function* SignUp({payload:{displayName, email, password}}) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email,password);
        yield put(signUpSuccess({user, additionalData:{displayName}}));
    } catch(error) {
        yield put(signUpFailure(error));
    }
}

export function* signInAfterSignUp({payload:{user,additionalData}}) {
    yield userSnapshot(user,additionalData);
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmailAndPassword)
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle);
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated);
}

export function* onUserSignOut() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START,SignOut);
}

export function* onUserSignUp() {
    yield takeLatest(UserActionTypes.SIGN_UP_START,SignUp);
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onUserSignOut),
        call(onUserSignUp),
        call(onSignUpSuccess)
    ])
}