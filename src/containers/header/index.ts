import { IStore } from '../../store';
import { Header, IProps } from './header';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { searchByTerm } from '../../store/actions/search-term.action';


const mapDispatchToProps = (dispatch: Dispatch): IProps => ({
    search: (term: string) => dispatch(searchByTerm(term))
});
export default connect<null, IProps, null, IStore>(null, mapDispatchToProps)(Header);