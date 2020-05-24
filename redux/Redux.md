**Install Redux**

npm install redux react-redux
npm install redux-thunk

**Next step**
import all these in the root index.js located in src folder

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


put this next line in the index.js root file made with the app

const store = createStore(rootReducers, applyMiddleware(thunk))