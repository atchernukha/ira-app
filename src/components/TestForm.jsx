import React from 'react';
import { useForm } from 'react-hook-form';

const styles = {
    formItem: {
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
        color: '#f35361',
        border: 'none',
        height: "30px",
        fontSize: "24px",
    },
    submit: {
        background: '#fff',
        color: '#18c23d',
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
};

const onSubmitForm = formData => {console.log("FormData: ",formData);}

export default function TestForm({beneficiary}) {
    const {register,handleSubmit} = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmitForm)} style={styles.formItem}>

            <div style={styles.formGroup}>
                <label type={styles.label}>Full Name</label>
                <input style={styles.input} defaultValue={beneficiary.fullName} placeholder="John Doe" {...register('fullName')} />
                {/* <input style={styles.input} name="fullName" placeholder="John Doe" value={beneficiary.fullName} size='20' /> */}
            </div>
            <div style={styles.formGroup}>
                <label type={styles.label}>Date of Birth</label>
                <input style={styles.input} type='date' defaultValue={beneficiary.birth} {...register('birthday')} />
            </div>
            <div style={styles.formGroup}>
                <select style={{...styles.input, ...styles.select}} defaultValue={beneficiary.ssn} {...register('ssn')} >
                    <option value="SSN">SSN</option>
                    <option value="INN">INN</option>
                </select>
            </div>
            <div style={styles.formGroup}>
                <input style={styles.input} placeholder="optional" size='5' defaultValue={beneficiary.optional} {...register('optional')} />
            </div>
            <div style={styles.formGroup}>
                <label type={styles.label}>Relationship</label>
                 <select style={{...styles.input, ...styles.select}} value={beneficiary.relationship} {...register('relationship')}>
                <option value="Trust">Trust</option>
                <option value="noTrust">noTrust</option>
                </select>    
            </div>
            <div style={styles.formGroup}>
                <input style={{...styles.input, ...styles.percentage}} type="number" 
                        defaultValue={beneficiary.part} size='4' {...register('part', { min: 0, max: 100 })} />
            </div>
            <button style={styles.remove} onClick={()=>{}}>
            {/* <button style={styles.remove} onClick={remove}> */}
                <i class="uil uil-times"></i>
            </button>

            {/* {(!beneficiary.complited)&&
            <button style={styles.submit} onClick={check}>
                <i class="uil uil-check"></i>
            </button>} */}
        
            <button type="submit" style={styles.submit} >
                <i class="uil uil-check"></i>
            </button>
        </form>
    )
}
