import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';

import Main from './Main';

function mapsStateToProps(state){
    return {
        posts: state.posts,
        commments: state.comments
    }
}

function mapDispacthToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}
const App = connect(mapsStateToProps, mapDispacthToProps)(Main);

export default App;