import { createStore, combineReducers  } from 'redux'
import { persistReducer } from 'redux-persist' // imports from redux-persist
import AsyncStorage from '@react-native-community/async-storage';
import { persistCombineReducers } from 'redux-persist'
import authReducer from './Reducers/authRefucer'
import chatdataReducer from './Reducers/chatdataReducer'


const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage: AsyncStorage // define which storage to use
}




export default createStore(persistReducer(persistConfig,authReducer))





