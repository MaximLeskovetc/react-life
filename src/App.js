import React, {Component} from 'react';
import Table from "./components/Table";
import './app.scss'

export default class App extends Component {
    state = {
        field: []
    };

    componentDidMount() {
        this.fillField(30, 30);
    }

    findNeighbour = (field, row, cell) => {
        let neighbour = 0;
        const directions = [
            {row: -1, cell: -1},
            {row: -1, cell: 0},
            {row: -1, cell: +1},
            {row: 0, cell: -1},
            {row: 0, cell: +1},
            {row: +1, cell: -1},
            {row: +1, cell: 0},
            {row: +1, cell: +1},
        ];
        directions.forEach(direction => {
            if (row + direction.row >= 0 && cell + direction.cell >= 0 &&
                row + direction.row < field.length && cell + direction.cell < field[row].length
            ) {
                if (field[row + direction.row][cell + direction.cell] === 1) {
                    neighbour++
                }
            }
        });
        if (neighbour === 2 || neighbour === 3) {
            return 1;
        }
        return 0;
    };


    game = () => {
        const field = [...this.state.field];
        const newFiend = [];
        for (let i = 0; i < field.length; i++) {
            const row = [];
            for (let j = 0; j < field[i].length; j++) {
                row.push(this.findNeighbour(field, i, j))
            }
            newFiend.push(row)
        }
        this.setState({
            field: newFiend
        });
        requestAnimationFrame(this.game)
    };

    fillField = (rows, columns) => {
        const newField = [];
        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < columns; j++) {
                row.push('0')
            }
            newField.push(row);
        }
        this.setState({field: newField})
    };


    handleClick = (row, cell) => {
        const newField = [...this.state.field];
        newField[row][cell] = 1;
        this.setState({
            field: newField
        })
    };

    render() {
        return (
            <div className='table'>
                <Table
                    field={this.state.field}
                    handleClick={this.handleClick}
                />
                <button type='button' onClick={this.game}>Поехали</button>
            </div>
        )
    }
}
