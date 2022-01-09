import {createStore} from 'redux'
import reducer from './reducer';
import {initial} from './reducer'

const store = createStore(reducer, initial && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store