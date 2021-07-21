import React from 'react';

const styles = {
    li: {
        display: 'flex',
        gap: '0.3em',
        fontSize: "18px",
    },
    stepLabel: {},
}

const CheckStep = ({stepLabel, status}) => 
    (
        <div >
            <li style={{...styles.li,...(status === "current") && {background: '#f3f3f3'}}}>
                &nbsp;&nbsp;
               {(status === "done") && (<i style={{color: '#18c23d'}} class="uil uil-check"/>)}
               {(status === "current") && (<i style={{color: '#2f80ed'}} class="uil uil-compact-disc"/>)}
               {(status === "inactive") && (<i style={{color: '#c9c4c4'}} class="uil uil-circle"/>)}
                <div style={styles.stepLabel}>{stepLabel}</div>
            </li>
        </div>
    );


export default CheckStep;