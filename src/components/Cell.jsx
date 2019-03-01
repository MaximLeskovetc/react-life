import React, {Component} from 'react';

export default class Cell extends Component {
    render() {
        return (
            <div
                onClick={() => this.props.handleClick(this.props.rowIndex, this.props.cellIndex)}
                className={`cell ${this.props.value === 1 ? 'enemy' : ''}`}
            >
            </div>
        )
    }
}