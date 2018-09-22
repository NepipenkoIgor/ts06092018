import { IStore } from '../../store';
import { Content, IDispatchers, IFields } from './content';
import { Dispatch } from 'redux';
import { getUsersPending } from '../../store/actions/users.action';
import { connect } from 'react-redux';

const mapStateToProps = (state: IStore): IFields => ({
    searchTerm: state.searchTerm,
    users: state.users,
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchers => ({
    getUsers: () => dispatch(getUsersPending())
});
export default connect<IFields, IDispatchers, null, IStore>(mapStateToProps, mapDispatchToProps)(Content);