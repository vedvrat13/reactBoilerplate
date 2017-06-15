import React, {Component, PropTypes} from 'react';
import {loadStore} from 'actions/actions';
import {connect} from 'react-redux';

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }
    componentDidMount() {
        this.props.loadStore();
        this.timerID = setInterval(
            () => this.setState({date: new Date()}),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export function mapStateToProps(state){
    return state;
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        loadStore: () => {
            dispatch(loadStore());
        }
    };
};

App.propTypes = {
    loadStore: PropTypes.func
};

export default (connect)(mapStateToProps, mapDispatchToProps)(App);
