import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
              <h1>Hello, world!</h1>
              <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
