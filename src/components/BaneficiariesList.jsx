import React from 'react';
import Beneficiary from './Beneficiary';
import './BeneficiaryList.css';


const styles = {
    padding: '2em',
    ul: {
        listStyleType: 'none',
        margin: 0,
        padding: 0
    },
    formGroup: {
        display: "flex",
        alignItems: 'flex-end',
        gap: "14px"
    },
}

export default function BeneficiariesList(props) {
    const nextCheck = props.nextCheck;
    return (
        <form style={styles}>

            <h3>BENEFICIARIES</h3>
            <br />
            <h3>Primary Beneficiaries</h3>
            <br />
            <ul style={styles.ul}>
                {props.beneficiaries.map(
                    item => (<li><Beneficiary key={item.id} beneficiary={item} /></li>)
                )}
            </ul>
            <br />
            <div>Primary Total: 50%</div>
            <br />
            <label style={styles.formGroup}>
            <strong>Confingent Beneficiaies</strong> 
            <label className="switch">
                    <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            </label>
            <br />
            <br />
            <br />
            <button onClick={() => nextCheck()}>Next</button>

        </form>
    )
}
