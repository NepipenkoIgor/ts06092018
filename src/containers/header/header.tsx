import * as React from 'react';
import './style.css';

export interface IProps {
    search(term: string): void;
}

function debounce(ms: number = 300) {
    return (_target: any, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        let intervalMark: number;
        return {
            ...descriptor,
            value(...args: any[]) {
                clearTimeout(intervalMark);
                intervalMark = window.setTimeout(() => {
                    descriptor.value.apply(this, args);
                }, ms);
            }
        };
    };
}


export class Header extends React.Component<IProps> {
    @debounce(500)
    public onSearch(term: string) {
        this.props.search(term);
    }

    public render(): JSX.Element {
        return <div className='row header'>
            Search: <input type='text' onChange={(e) => this.onSearch.call(this, e.target.value)}/>
        </div>;
    }
}