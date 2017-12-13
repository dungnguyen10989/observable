import React from 'react'
import { Alert } from 'react-native'
import * as actionTypes from '../actionTypes/user';
import { Observable } from 'rxjs';
import axios from 'axios'
import store from '../store'

const fakeApi = (limit) => Observable.fromPromise(
    axios.get('https://beta.bikenconnect.com/api/user/me?access_token=69781c11943b6b7cce4f182689dabbae578719e')
);


export default action$ => action$.ofType(actionTypes.FETCH_USER)
    .mergeMap(() => fakeApi(Math.floor((Math.random() * 10) + 1))
        .map(response => {
            store.dispatch({ type: 'ADD',payload: response })
            return {
                type: actionTypes.FETCH_USER_SUCCESS, payload: response.data.result
            }
        }
        ).catch(error => {
            Alert.alert('error.response.data.message')
            return 
                Observable.of({
                    type: actionTypes.FETCH_USER_ERROR,
                    payload: error.response.data
                })
        })
        .takeUntil(action$.ofType(actionTypes.CANCEL_FETCHING_USER))
    );
