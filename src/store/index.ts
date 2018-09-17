import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './reducers';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';
import { IUser } from './reducers/users.reducer';


declare var __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (arg: { name: string }) => typeof compose;

export interface IStore {
    searchTerm: string;
    users: IUser[];
}

const rootEpicsMiddleware = createEpicMiddleware();

const combineEnchancer =
    typeof window === 'object' &&
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? __REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            name: 'TypeScript course'
        })
        : compose;


const enchancer = combineEnchancer(
    applyMiddleware(rootEpicsMiddleware)
);


export const store = createStore(rootReducer, enchancer);

rootEpicsMiddleware.run(rootEpic);