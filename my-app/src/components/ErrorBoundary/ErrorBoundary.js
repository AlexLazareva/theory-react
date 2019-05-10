import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    render() {
        if (this.state.hasError) {
            return <h1>Something error</h1>;
        }
        return this.props.children;
    }
}


