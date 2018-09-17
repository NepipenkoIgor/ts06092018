import { IUser } from '../reducers/users.reducer';

export const GET_USERS_PENDING = '[TS_COURSE] GET_USERS_PENDING';
export const GET_USERS_SUCCESS = '[TS_COURSE] GET_USERS_SUCCESS';
export const GET_USERS_ERROR = '[TS_COURSE] GET_USERS_ERROR';

export function getUsersPending() {
    return {
        type: GET_USERS_PENDING,
    };
}

export function getUsersSuccess(payload: IUser[]) {
    return {
        type: GET_USERS_SUCCESS,
        payload
    };
}

export function getUsersError(payload: string) {
    return {
        type: GET_USERS_ERROR,
        payload
    };
}