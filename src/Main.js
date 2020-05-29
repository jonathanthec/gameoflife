import React, { useState, useRef, useEffect } from 'react';
import Grid from './Grid';
import ControlBar from './ControlBar';
import About from './About'

export default function Main() {
    const [hasStarted, setHasStarted] = useState(false);
    const [speed, setSpeed] = useState(100);
    const [rows, setRows] = useState(30);
    const [cols, setCols] = useState(50);
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

    const gridSize = size => {
        switch (size) {
            case "1":
                setRows(15);
                setCols(25);
                break;
            case "2":
                setRows(25);
                setCols(40);
                break;
            case "3":
                setRows(30);
                setCols(50);
                break;
            default:
                setRows(30);
                setCols(50);
        }
    }

    useEffect(() => {
        if (hasStarted) {
            start();
        }
        // eslint-disable-next-line
    }, [start])

    return (
        <div>
            <ControlBar
                start={start}
                pause={pause}
                clear={clear}
                slow={slow}
                fast={fast}
                seed={seed}
                gridSize={gridSize}
            />
            <h2 className="gen-count">Current Generation: {generation}</h2>
            <Grid
                rows={rows}
                cols={cols}
                gridFull={gridFull}
                selectBox={selectBox}
            />
            <About />
        </div>
    )
}

function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr));
}