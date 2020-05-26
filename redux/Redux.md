**Briefing**

So we are going to set this app up using redux to store state, also we will be using multiple reducers in this example.

**Installing Redux**

npm install redux react-redux
npm install redux-thunk

**Next steps**
import all these in the root index.js located in src folder

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


Put this next line in the index.js root file made with the app

const store = createStore(rootReducers, applyMiddleware(thunk))

Next we need to wrap App component with a Provider tag imported from 'react-redux' and give it a store property

**Ready for coding now**
1. Create a reducers and actions folder
2. changing all the class components to functional components this could work as class component as well



**Side note**
Kept the hooks built in the pokemon cards
A reminder that this is probaly not the best usage of Redux since this app is such a small app.