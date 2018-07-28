import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import reducers from '../reducers/index.js';

export const store = createStore(
	combineReducers({
		NavState: reducers.NavReducer,
		CampaignState: reducers.CampaignReducer,
		SurvivorState: reducers.SurvivorReducer,
		routing: routerReducer
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const history = syncHistoryWithStore(createBrowserHistory(), store);
