import React, {Component} from 'react';
import Row from './Row'

export default class Table extends Component {
    renderRows = () => {
        return this.props.field.map((row, index) =>
            <div className='row'>
                <Row
                    handleClick={this.props.handleClick}
                    row={row}
                    rowIndex={index}
                    key={index}
                />
            </div>
        )
    };

    render() {
        return (
            <>
                {this.renderRows()}
            </>
        )
    }
}