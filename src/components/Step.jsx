import React from 'react';import check from '../icons/check2.svg';


// const    primaryColor = '#2f80ed';
// const     secondaryColor = '#e0e0e0';

export default function Step(props) {
    const stepLabel = props.stepLabel;
    const lastStep = props.lastStep;
    const firstStep = props.firstStep;
    const status = props.status;
    let pre = "pre";
    let post = "post";
    let point = "point";
    switch(status) {
        case "current":
            pre += " done";
            post += " inactive";
            point += " current";
            break;
        case "done":
            pre += " done";
            post += " done";
            point += " done";
            break;
        default:
            pre += " inactive";
            post += " inactive";
            point += " inactive";
            break;
    }
    (firstStep)&&(pre += ' hide');
    (lastStep)&&(post += ' hide');
    return (
        <div className="stepContainer">
            <div className="pointContainer">
                <div className={pre}></div>
                <div className={point}>
                <img src={check}  alt="check"/>
                </div>
                <div className={post} ></div>
            </div>
            <div className="stepLabel">{stepLabel}</div>
        </div>
    )
}
