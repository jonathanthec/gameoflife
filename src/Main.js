import React, { useState } from 'react';
import styled from 'styled-components';
import Grid from './Grid';

export default function Main() {
    const [speed, setSpeed] = useState(100);
    const [rows, setRows] = useState(30);
    const [cols, setCols] = useState(50);
    const [generation, setGeneration] = useState(0);
    const [gridFull, setGridFull] = useState(Array(rows).fill().map(() => Array(cols).fill(false)))

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
            />
        </div>
    )
}

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;