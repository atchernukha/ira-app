import React from 'react';
import check from '../icons/check2.svg';

const styles = {
    form: {
        // display: 'flex',
        // justifyContent: 'space-betveen',
      
    },
    input: {
        border: '1px solid #ccc',
        borderRadius: "4px",

    },
    inputs: {
        padding: '.5rem 1.rem',
        display: 'flex',
        justifyContent: 'space-betveen',        
    },
    rm: {
        background: '#fff',
        color: 'red',
        border: 'none'
    },
    submit: {
        background: '#fff',
        border: 'none'
    }    
}

export default function Beneficiary({beneficiary}) {
    return (<div>
            <form style={styles.form}>
                             
                <label type={styles.inputs}>
                    Full Name   Date of Birth    Relationship
                    <br/>
                 </label>
                <div >
                <input style={styles.input} type="text" name="fullName" value={beneficiary.fullName} size='20'/>
                <input style={styles.input} type='date' name='birthday'value={beneficiary.birth}/>
                <select style={styles.input} value={beneficiary.ssn}>
                    <option value= "SSN">SSN</option>
                    <option value= "INN">INN</option>
                </select>
                <input style={styles.input} type="text" name="optional" value={beneficiary.optional} size='5'/>
                <input style={styles.input} type="text" name="relationship" value={beneficiary.relationship} size='5'/>
                <input style={styles.input} type="number" name="part" max ='100' value={beneficiary.part} size='4'/>
                <button style={styles.rm}>&times;</button>
                <button style={styles.submit}>
                <img src={check}  alt="check"/>
                </button> 
                </div>
            </form>
            </div>)
}
