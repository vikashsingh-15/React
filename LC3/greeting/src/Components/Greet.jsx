import React from 'react';

export default class Greet extends React.Component {
    //props can be accessed by this.props.name -> name since it is described as name while giving props
    render() {
        return (
            <div>
                <h1>Good Morning {this.props.name}. Your age id {this.props.age}</h1>
            </div>
        );
    }
}