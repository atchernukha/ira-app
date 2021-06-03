import React from 'react';

export default function Steps(props) {
    const stepList = props.stepList;
    const stepsStyles = props.stepsStyles;
    const Step = props.step;

    return (
        <div style={stepsStyles.stepsContainer}>
            <ul  style={stepsStyles.ul} >
                {stepList.map((item,i) => <Step key={i} {...item} />)}
            </ul>
        </div>
    )
}
