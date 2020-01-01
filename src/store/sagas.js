import { all } from 'redux-saga/effects'
import customSaga from './custom/sagas';

export default function* rootSaga() {
    yield all([
        ...customSaga,
    ]);
};
