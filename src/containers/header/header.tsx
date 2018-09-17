import * as React from 'react';
import './style.css';

export interface IProps {
    search(term: string): void;
}


export class Header extends React.Component<IProps> {
    public onSearch(term: string) {
        this.props.search(term);
    }

    public render(): JSX.Element {
        return <div className='row header'>
            Search: <input type='text' onChange={(e) => this.onSearch.call(this, e.target.value)}/>
        </div>;
    }
}