/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore} from 'redux';
import reducers from './reducers/taskReducers';
import {Provider} from 'react-redux';
import TaskManagerComponentfrom from'./components/taskManager';

const store = createStore(reducers);

const App = () =>{
    <Provider store = {store}>
    
    </Provider>
}


AppRegistry.registerComponent(appName, () => TaskManagerComponentfrom);
