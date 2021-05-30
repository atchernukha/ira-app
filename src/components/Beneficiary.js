import React from 'react';

const styles = {
    form: {
        display: 'flex',
        alignItems: 'flex-end',
        width: "100%",
        gap: "1em",
        marginBottom: "1.5em",
    },
    input: {
        border: 'none',
        borderRadius: "4px",
        display: "block",
        height: "30px",
        fontSize: "16px",
        padding: "2px 10px",
        backgroundColor: "#f5f5f5",
    },
    select: {
        boxSizing: 'content-box'
    },
    label: {},
    remove: {
        background: '#fff',
        color: 'red',
        border: 'none',
        height: "30px",
        fontSize: "24px",
    },
    submit: {
        background: '#fff',
        color: 'green',
        border: 'none',
        height: "30px",
        fontSize: "24px",
    },
    formGroup: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: "4px"
    },
    percentage: {
        width: "60px",
    }
}

export default function Beneficiary({ beneficiary }) {
    return (
        <form style={styles.form}>
            <div style={styles.formGroup}>
                <label type={styles.label}>Full Name</label>
                <input style={styles.input} type="text" name="fullName" value={beneficiary.fullName} size='20' />
            </div>
            <div style={styles.formGroup}>
                <label type={styles.label}>Date of Birth</label>
                <input style={styles.input} type='date' name='birthday' value={beneficiary.birth} />
            </div>
            <div style={styles.formGroup}>
                <select style={{...styles.input, ...styles.select}} value={beneficiary.ssn}>
                    <option value="SSN">SSN</option>
                    <option value="INN">INN</option>
                </select>
            </div>
            <div style={styles.formGroup}>
                <input style={styles.input} type="text" name="optional" placeholder="optional" value={beneficiary.optional} size='5' />
            </div>
            <div style={styles.formGroup}>
                <label type={styles.label}>
                    Relationship
           </label>
                <input style={styles.input} type="text" name="relationship" value={beneficiary.relationship} size='5' />
            </div>
            <div style={styles.formGroup}>
                <input style={{...styles.input, ...styles.percentage}} type="number" name="part" max='100' value={beneficiary.part} size='4' />
            </div>
            <button style={styles.remove}>
                <i class="uil uil-times"></i>
            </button>
            <button style={styles.submit}>
                <i class="uil uil-check"></i>
            </button>
        </form>
    )
}
