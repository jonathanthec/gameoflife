import React from 'react';
import Box from './Box';

export default function Grid(props) {
    const { rows, cols, gridFull } = props;
    let rowArr = [];
    let boxClass = "";
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let boxId = i + "_" + j;
            boxClass = gridFull[i][j] ? "box alive" : "box dead";
            rowArr.push(
                <Box
                    boxClass={boxClass}
                    row={i}
                    col={j}
                    selectBox={props.selectBox}
                    boxId={boxId}
                    key={boxId}
                />)
        }
    }
    return (
        <div className="grid" style={{ width: cols * 14 }}>
            {rowArr}
        </div>
    )
}