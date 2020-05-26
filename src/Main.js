import React, { useState } from 'react';
import styled from 'styled-components';
import Grid from './Grid';

export default function Main() {
    const [speed, setSpeed] = useState(100);
    const [rows, setRows] = useState(30);
    const [cols, setCols] = useState(50);
    const [generation, setGeneration] = useState(0);
    const [gridFull, setGridFull] = useState(Array(rows).fill().map(() => Array(cols).fill(false)))

    const selectBox = (row, col) => {
        let gridCopy = arrayClone(gridFull);
        gridCopy[row][col] = !gridCopy[row][col];
        setGridFull(gridCopy);
    }

    return (
        <div>
            <h1>Game of Life</h1>
            <h2>Current Generation: {generation}</h2>
            <ButtonsContainer>
                <button>Start</button>
                <button>Pause</button>
                <button>Clear</button>
            </ButtonsContainer>
            <Grid
                rows={rows}
                cols={cols}
                gridFull={gridFull}
                selectBox={selectBox}
            />
        </div>
    )
}

function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr));
}

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;