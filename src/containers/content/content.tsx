import * as React from 'react';
import { IUser } from '../../store/reducers/users.reducer';
import './style.css';

export interface IFields {
    searchTerm: string;
    users: IUser[];
}

export interface IDispatchers {
    getUsers(): void;
}

export interface IProps extends IFields, IDispatchers {

}


export class Content extends React.Component<IProps> {
    public componentDidMount() {
        this.props.getUsers();
    }

    public render(): JSX.Element {
        const { searchTerm, users } = this.props;

        return (<div className='container-fluid'>
            {Array.isArray(users)
                ? users.filter((user: IUser) =>
                    `${user.firstName} ${user.surname}`.toLowerCase()
                        .includes(searchTerm.toLowerCase()))
                    .map((user: IUser, index: number) => (
                        <div className='card' key={index}>
                            <img className='card-img-top' src={user.photo}/>
                            <div className='card-body'>
                                <p className='card-text'>{user.firstName} {user.surname}</p>
                            </div>
                        </div>
                    )) : null}
        </div>);
    }
}