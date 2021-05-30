import React from 'react';import check from '../icons/check2.svg';
// import './Steps.css';


const primaryColor = '#2f80ed';
const secondaryColor = '#e0e0e0';
const stepStyle = {
stepContainer: {
        flex: '1'
},
pointContainer: {
    primaryColor: '#2f80ed',
    secondaryColor: '#e0e0e0',
    display: 'flex',
    justifyContent: 'space-between'
},
point: {
        minWidth: '36px',
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: secondaryColor,

    },
pre: {
        height: '1px',
        width: '100%',
        marginTop: '18px',
        backgroundColor: secondaryColor
    },
post: {
        height: '1px',
        width: '100%',
        marginTop: '18px',
        backgroundColor: secondaryColor
    },
done: {
        backgroundColor: primaryColor
},
inactive: {
        backgroundColor: secondaryColor
},
current: {
        border: 'thick double '+primaryColor
},
hide: {
        visibility: 'hidden'
   },
stepLabel: {
        height: '1rem',
        minWidth: '260px',
        textAlign: 'center'
    }
}

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
            // Object.assign(stepStyle.point, stepStyle.current);
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
        <div style={stepStyle.stepContainer}>
            <div style={stepStyle.pointContainer}>
                <div style={stepStyle.pre}></div>
                <div style={stepStyle.point}>
                <img src={check}  alt="check"/>
                </div>
                <div style={stepStyle.post} ></div>
            </div>
            <div style={stepStyle.stepLabel}>{stepLabel}</div>
        </div>
        </li>
    )
}