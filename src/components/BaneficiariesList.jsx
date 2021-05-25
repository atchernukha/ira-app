import React from 'react'
import Beneficiary from './Beneficiary'

const styles = {
    ul: {
        listStyleType: 'none',
        margin: 0,
        padding: 0
    },
}

export default function BeneficiariesList(props) {
    return (
        <div className="main">
            <p>
            <h2>BENEFICIARIES</h2>
            <br/>
            <h3>Primary Beneficiaries</h3>
            <br/>
            <ul style={styles.ul}>
                {props.beneficiaries.map(
                    item => (<li><Beneficiary key={item.id} beneficiary={item}/></li>)
                )}
            </ul>
            <br/>
            <div>Primary Total: 50%</div>
            <br/>
            <label>
                Confingent Beneficiaies
                <button type="radio"></button>
            </label>
            <br/>
            <button>Next</button>
            </p>
            </div>
    )
}
