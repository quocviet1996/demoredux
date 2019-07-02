import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput
} from 'react-native';

import addContainer from '../containers/addContainer';

export default class TaskManagerComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <addContainer/>  
            
            </View>
        );
    }
};