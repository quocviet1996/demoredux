import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput
} from 'react-native';

import { addNewTask } from '../actions';

export default class addComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            newTaskName: ''
        });
    }
    render() {
        return (
            <View style={{
                backgroundColor: 'tomato',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: 64
            }}>
                <TextInput style={{
                    height: 40,
                    width: 200,
                    margin: 10,
                    padding: 10,
                    borderColor: 'white',
                    borderWidth: 1,
                    color: 'white'
                }}
                    keyboardType='default'
                    placeholderTextColor='white'
                    placeholder='Enter task name'
                    autoCapitalize='none'
                    onChangeText={
                        (text) => {
                            this.setState({ newTaskName: text });
                        }
                    }
                />
                <TouchableHighlight
                    style={{ marginRight: 10 }}
                    underlayColor='blue'
                    onPress={() => {
                        if (!this.state.newTaskName.trim()) {
                            return;
                        } 
                        //Call click event => use "Container"
                        {this.props.ClickAdd(this.state.newTaskName)}
                    }}
                >
                    <Image
                        style={{ width: 35, height: 35 }}
                        source={require('../img/392308373749497856.png')}
                    />
                </TouchableHighlight>

            </View>);
    }
}
