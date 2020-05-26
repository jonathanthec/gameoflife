import React from 'react';
import './index.css';

export default function Box(props) {
    const selectBox = () => {
        props.selectBox(props.row, props.col);
    }

    return (
        <div
            className={props.boxClass}
            id={props.boxId}
            onClick={selectBox}
        />
    )
}