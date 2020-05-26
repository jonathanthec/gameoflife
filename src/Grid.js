import React from 'react';

export default function Grid(props) {
    const { rows, cols, gridFull } = props;
    let rowArr = [];
    let boxClass = "";
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let boxId = i + "_" + j;
            boxClass = gridFull[i][j] ? "box alive" : "box dead";
            rowArr.push(<p>Hi</p>)
        }
    }
    return (
        <div>
        </div>
    )
}