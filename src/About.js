import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function About() {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="go-back-container">
                <Navbar.Brand href="/gameoflife" className="go-back-title">Go Back!</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Navbar>
            <h2 className="gen-count">Conway's Game of Life</h2>
            <div className="about-text">
                <p>The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.[1] It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.</p>
                <p>The universe of this simple Game of Life is a two-dimensional grid of square cells, each of which is in one of two possible states, live or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:</p>
                <ol>
                    <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
                    <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
                    <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
                    <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
                </ol>
                <p>These rules, which compare the behavior of the automaton to real life, can be condensed into the following:</p>
                <ol>
                    <li>Any live cell with two or three live neighbours survives.</li>
                    <li>Any dead cell with three live neighbours becomes a live cell.</li>
                    <li>All other live cells die in the next generation. Similarly, all other dead cells stay dead.</li>
                </ol>
                <p>The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.</p>
                <p>For this simple simulation, start by choosing a grid. There are three sizes to pick from. Next, use your mouse to mark cells as alive (will be denoted by the color green), as all cells start off as being dead. Alternatively, you may click Randomize to generate a random grid with living cells. To start the animation, select an option from Start, which contains a list of speed to run the animations in.</p>
            </div>
        </div>
    )
}