
import React from 'react';
import './RoundStep.css';


export default function RoundStep(props) {
    const stepLabel = props.stepLabel;
    const stepIcon = props.stepIcon;
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
        <li>
        <div className="stepContainer">
            <div className="pointContainer">
                <div className={pre}></div>
                <div className={point}>
                <i className={stepIcon}></i>
                </div>
                <div className={post} ></div>
            </div>
            <div className="stepLabel">{stepLabel}</div>
        </div>
        </li>
    )
}
