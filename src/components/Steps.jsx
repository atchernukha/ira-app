import React from 'react';
import Step from './Step';
import './Steps.css';

export default function Steps(props) {
    const stepList = props.stepList;
    const stepsStyles = props.stepsStyles;

    return (
            <ul  style={stepsStyles} >
                {stepList.map((item,i) =>
                    <li key={i}>
                        <Step key={i} {...item} /> 
                    </li>)}
            </ul>
    )
}
