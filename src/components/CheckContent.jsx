import React, { useState } from 'react'
import BeneficiariesList from './BaneficiariesList'
import TestForm from './TestForm';
import TestIndex from './TestIndex';

export default function CheckContent(props) {
    const [beneficiaries, setBeneficiaries] = useState([
        { id: 0, fullName: "Tom Cruise", birth: "1980-01-01", ssn: "SSN", optional: "", relationship: "Trust", part: 40, complited: true },
        { id: 1, fullName: "Elon Musk", birth: "1970-01-01", ssn: "SSN", optional: "", relationship: "Trust", part: 20, complited: true },
        { id: 2, fullName: "Jeff Bezos", birth: "1965-01-01", ssn: "SSN", optional: "", relationship: "Trust", part: 30, complited: true }
    ]);
    const { nextCheck, onCompleted } = props;
    const removeBeneficiary = id =>
        setBeneficiaries(beneficiaries.filter(beneficiary => beneficiary.id !== id));
    const addBeneficiary = beneficiary => { console.log("id:" + beneficiary.id) };

    switch (props.currentCheck) {
        case 0:
            return (
                <div>
                    <h2>Check 1</h2>
                    <ul >
                        {beneficiaries.map(
                            item => (<li><TestForm key={item.id} beneficiary={item} /></li>)
                        )}
                    </ul>
                    <TestForm beneficiary={{
                        // id: beneficiaries.length+1, 
                        fullName: "", birth: "", ssn: "", 
                        optional: "", relationship: "", part: 0, complited: false}}  />
                    <button className="button" onClick={() => nextCheck()}>Next</button>
                </div>
            )
        case 1:
            return (
                <div >
                    {/* <h2>Check 2</h2> */}
                    <TestIndex></TestIndex>
                    <button className="button" onClick={() => nextCheck()}>Next</button>
                </div>
            )
        case 2:
            return (<div>
                <h2>Check 3</h2>
                <button className="button" onClick={() => nextCheck()}>Next</button>
            </div>)

        case 3:
            return (<div>
                <BeneficiariesList
                    beneficiaries={beneficiaries}
                    nextCheck={nextCheck}
                    removeBeneficiary={removeBeneficiary}
                    addBeneficiary={addBeneficiary} />
                {/* <h2>Step 4</h2>
                <button className="button" onClick={()=>nextCheck()}>Next</button> */}
            </div>)
        case 4:
            return (<div>
                <h2>Check 5</h2>
                <button className="button" onClick={() => nextCheck()}>Next</button>
            </div>)
        case 5:
            return (<div>
                <h2>Check 6</h2>
                <button className="button" onClick={() => onCompleted()}>Next</button>
            </div>)
    }
}
