import createHistory from 'history/createHashHistory';
import configureStore from '../store';

export default function () {
  // Create redux store with history
  // this uses the singleton browserHistory provided by react-router
  // Optionally, this could be changed to leverage a created history
  // e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
  const initialState = {};
  this.history = createHistory();
  this.store = configureStore(initialState, this.history);
}
