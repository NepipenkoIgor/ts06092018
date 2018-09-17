import { combineEpics } from 'redux-observable';
import { usersEpic } from './users.epic';

export const rootEpic = combineEpics(usersEpic);