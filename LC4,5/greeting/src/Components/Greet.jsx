import React from 'react';

export default class Greet extends React.Component {

    constructor(props) {
        super(props);
        console.log("Greet constructor");
    }
    
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
            </div>
        );
    }
}

