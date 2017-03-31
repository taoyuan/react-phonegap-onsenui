import {createSelector} from "reselect";

const selectAuth = (state) => state.get('auth');

const makeSelectUser = () => createSelector(
  selectAuth,
  authState => authState.get('user')
);

export {
  selectAuth,
  makeSelectUser,
};
