import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => {
	//the empty object {} enable you to send initial states
	const store = createStore(reducers, initialState, applyMiddleware(async, stateValidator));
	return <Provider store={store}>{children}</Provider>;
};
