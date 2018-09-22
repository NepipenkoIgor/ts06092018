import { AnyAction } from 'redux';
import { GET_USERS_SUCCESS } from '../actions/users.action';

export interface IUser {
    profileName: string;
    firstName: string;
    surname: string;
    country: string;
    photo?: string;
}

const initalState: IUser[] = [];

export const usersReducer = (state = initalState, action: AnyAction): IUser[] => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return [...state, ...action.payload];
        default:
            return state;
    }
};