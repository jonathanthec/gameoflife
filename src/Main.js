import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Grid from './Grid';

export default function Main() {
    const [hasStarted, setHasStarted] = useState(false);
    const [speed, setSpeed] = useState(100);
    const [rows] = useState(30);
    const [cols] = useState(50);
    const [generation, setGeneration] = useState(0);
    const [gridFull, setGridFull] = useState(Array(rows).fill().map(() => Array(cols).fill(false)))
    let intervalId = useRef(null);

    const selectBox = (row, col) => {
        let gridCopy = arrayClone(gridFull);
        gridCopy[row][col] = !gridCopy[row][col];
        setGridFull(gridCopy);
    }

    const seed = () => {
        clear();
        let gridCopy = arrayClone(gridFull);
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (Math.floor(Math.random() * 4) === 1) {
                    gridCopy[i][j] = true;
                }
            }
        }
        setGridFull(gridCopy);
    }

    const start = () => {
        setHasStarted(true);
        clearInterval(intervalId.current);
        intervalId.current = setInterval(play, speed);
    }

    const pause = () => {
        setHasStarted(false);
        clearInterval(intervalId.current);
    }

    const slow = () => {
        setHasStarted(true);
        setSpeed(1000);
        start();
    }

    const fast = () => {
        setHasStarted(true);
        setSpeed(100);
        start();
    }

    const clear = () => {
        setHasStarted(false);
        setGridFull(Array(rows).fill().map(() => Array(cols).fill(false)));
        setGeneration(0);
    }

    const play = () => {
        let g = gridFull;
        let g2 = arrayClone(gridFull);
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let count = 0;
                if (i > 0) if (g[i - 1][j]) count++;
                if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
                if (i > 0 && j < cols - 1) if (g[i - 1][j + 1]) count++;
                if (j < cols - 1) if (g[i][j + 1]) count++;
                if (j > 0) if (g[i][j - 1]) count++;
                if (i < rows - 1) if (g[i + 1][j]) count++;
                if (i < rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
                if (i < rows - 1 && j < cols - 1) if (g[i + 1][j + 1]) count++;
                if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
                if (!g[i][j] && count === 3) g2[i][j] = true;
            }
        }
        setGridFull(g2);
        setGeneration(generation + 1);
    }

    useEffect(() => {
        if (hasStarted) {
            start();
        }
    }, [start])

    return (
        <div>
            <h1>Game of Life</h1>
            <h2>Current Generation: {generation}</h2>
            <ButtonsContainer>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={clear}>Clear</button>
                <button onClick={slow}>Slow Start</button>
                <button onClick={fast}>Fast Start</button>
                <button onClick={seed}>Let's Go Random!</button>
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