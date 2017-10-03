import React from 'react';
import {
    View,
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './components/common/Header';
import LibraryList from './components/LibraryList';

const App =  ()=>{

    //This is the store we create with redux's createStore method
    const store = createStore(reducers);

    // Provider is given the store as a prop
    return(
        <Provider store={store}>
            <View>
                <Header headerText='Tech Stack'/>
                <LibraryList/>
            </View>
        </Provider>

    )
}

export default App;