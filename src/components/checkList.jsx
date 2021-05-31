import React from 'react';
import check from '../icons/check2.svg';

const styles = {
    ul: {
        listStyle: 'none',
    },
    li: {
        display: 'flex',
        // gap: '0.3em',
        gap: "1em",
    },
    point: {
            // min-width: '6px',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            /* background-color: #2f80ed; */
            backgroundColor: 'transpurent',
            border: 'thin solid grey'
    },
    current: {
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        backgroundColor: '#2f80ed',
        border: 'thin solid #2f80ed'
    }
}

export default function CheckList() {
    return (
        <div className="checkList">
            <ul style={styles.ul}>
            <li style={styles.li}>
                <div><img src={check}  alt="check"/></div>
                <div>Personal Information</div>
            </li>
            <li style={styles.li}>
                <div><img src={check}  alt="check"/></div>
                <div>Contact Information</div>
            </li>
            <li style={styles.li}>
                <div><img src={check}  alt="check"/></div>
                <div>Relationship</div>
            </li>
            <li style={styles.li}>
                <div style={styles.current}/>
                <div>Beneficiaries</div>
            </li>
            <li style={styles.li}>
                <div style={styles.point}/>
                <div>Account Characteristics</div>
            </li>
            <li style={styles.li}>
                <div style={styles.point}/>
                <div>Review</div>
             </li>
            </ul>
        </div>
    )
}
