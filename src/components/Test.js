import React, { Component } from 'react';

class Test extends Component {
    handleClick() {
        console.log("Click happened");
      }
    render() {
        return (
            <div>
                <button onClick= {this.handleClick}/>
            </div>
        );
    }
}

export default Test;