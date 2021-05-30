import React from 'react';

const styles = {
    li: {
        display: 'flex',
        gap: '0.3em',
        fontSize: "18px",
    },
    done: {
        color: 'green',
        // fontSize: "24px",
    },
    inactive: {
        color: '#e0e0e0',
        // fontSize: "24px",
    },
    current: {
        color: '#2f80ed',
        // fontSize: "24px",
    },
    stepLabel: {

    }
}

export default function CheckStep(props) {
    const stepLabel = props.stepLabel;
    const status = props.status;

    return (
        <div >
            <li style={styles.li}>
               {(status === "done") && (<i style={styles.done} class="uil uil-check"/>)}
               {/* {(status === "current") && (<i style={styles.current} class="uil uil-bullseye"/>)} */}
               {(status === "current") && (<i style={styles.current} class="uil uil-compact-disc"/>)}
               {(status === "inactive") && (<i style={styles.inactive} class="uil uil-circle"/>)}
                <div style={styles.stepLabel}>{stepLabel}</div>
            </li>
        </div>
    )
}
