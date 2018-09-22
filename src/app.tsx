import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Content from './containers/content';
import Header from './containers/header';

class App extends React.Component {
    public render(): JSX.Element {
        return <Provider store={store}>
            <div>
                <Header />
                <Content/>
            </div>
        </Provider>;
    }
}

const el = document.querySelector('#root') as HTMLDivElement;
ReactDOM.render(<App/>, el);