import { ActionsObservable, ofType } from 'redux-observable';
import { AnyAction } from 'redux';
import { GET_USERS_PENDING, getUsersError, getUsersSuccess } from '../actions/users.action';
import { catchError, map, switchMap } from 'rxjs/internal/operators';
import { fromPromise } from 'rxjs/internal-compatibility';
import { AxiosResponse } from 'axios';
import { IUser } from '../reducers/users.reducer';
import { of } from 'rxjs';
import { getUsers } from '../../services';


export const usersEpic = (action$: ActionsObservable<AnyAction>) =>
    action$.pipe(
        ofType(GET_USERS_PENDING),
        switchMap(() => {
            return fromPromise(getUsers()
                .then((res: AxiosResponse<IUser[]>) => res.data))
                .pipe(
                    map((users: IUser[]) => getUsersSuccess(users)),
                    catchError((_err) => of(getUsersError('wrong request')))
                );
        })
    );
