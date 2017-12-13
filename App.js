
import React from 'react';
import {StyleSheet, View} from 'react-native';
import 'rxjs';
import Main from './src/components/Main';
import {Provider} from 'react-redux';
import store from './src/redux/store';

export default class App extends React.Component {
    render() {
        return (
            <Provider store = {store}>
              <Main/>
            </Provider>
        );
    }
}