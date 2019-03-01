import React, {Component} from 'react';
import Cell from './Cell'

export default class Row extends Component {
    renderCell = () => {
        return this.props.row.map((cell, i) =>
            <Cell
                key={i}
                handleClick={this.props.handleClick}
                rowIndex={this.props.rowIndex}
                cellIndex={i}
                value={cell}
            />
        )
    };

    render() {
        return (
            <>
                {this.renderCell()}
            </>
        )
    }
}