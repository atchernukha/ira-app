import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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
    next: {},
    primaryTotal: {
        color: '#df960e',
        backgroundColor: '#fcf7e8',
    },
    totalGreen: {
        color: '#18c23d',
        backgroundColor: '#e5f8e9',
    },
    totalRed: {
        color: '#f35361',
        backgroundColor: '#fcecef',
    },
};
const onSubmitForm = formData => {console.log("FormData: ",formData);}


export default function BeneficiariesList({beneficiaries, nextCheck, removeBeneficiary, addBeneficiary}) {

    const {register, handleSubmit} = useForm();
        
    const [primaryTotal, setprimaryTotal] = useState(beneficiaries.reduce((acc,cur)=>acc+cur.part,0));

    const checkBeneficiary = () => {addBeneficiary()}; 
    
    var k= beneficiaries.length;

    return (
        <form style={styles} onSubmit={handleSubmit(onSubmitForm)}>

            <h3>BENEFICIARIES</h3>
            <br />
            <h3>Primary Beneficiaries</h3>
            <br />
            <ul style={styles.ul}>
                {beneficiaries.map(
                    (item,index) => (<li key={item.id}><Beneficiary beneficiary={item} 
                        index = {index}
                        removeBeneficiary = {removeBeneficiary} 
                        checkBeneficiary = {checkBeneficiary} register={register}/></li>)
                )}
            {(primaryTotal!==100)&&  
            <li><Beneficiary beneficiary={{id: beneficiaries.length, fullName: "", birth: "", ssn: "", 
                        optional: "", relationship: "", part: 0, complited: false}} 
                        removeBeneficiary = {removeBeneficiary} 
                        addBeneficiary = {addBeneficiary} register={register}/>
            </li>}

            </ul>
            <br />
            <div style={{...styles.primaryTotal,
                         ...(100<primaryTotal)&&styles.totalRed,
                         ...(100===primaryTotal)&&(styles.totalGreen)}}>
                            Primary Total: {primaryTotal}%</div>
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
            <button className="button" style={styles.next} onClick={() => nextCheck()}>Next</button>

        </form>
    )
}
