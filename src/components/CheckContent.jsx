import React from 'react'
import BeneficiariesList from './BaneficiariesList'

export default function CheckContent(props) {
    const beneficiaries = [
        { id: 1, fullName: "Tom Cruise", birth: "1980-01-01", ssn: "SSN", optional: "", relationship: "Trust", part: 50, complited: false },
        { id: 2, fullName: "Elon Musk", birth: "1970-01-01", ssn: "SSN", optional: "", relationship: "Trust", part: 50, complited: false },
        { id: 3, fullName: "Jeff Bezos", birth: "1965-01-01", ssn: "SSN", optional: "", relationship: "Trust", part: 50, complited: false }
    ];
    const nextCheck = props.nextCheck;
    const onCompleted= props.onCompleted;
    switch (props.currentCheck) {
        case 0:
            return (
                <div>
                    <h2>Check 1</h2>
                    <button onClick={() => nextCheck()}>Next</button>
                </div>
            )
        case 1:
            return (
                <div >
                    <h2>Check 2</h2>
                    <button onClick={() => nextCheck()}>Next</button>
                </div>
            )
        case 2:
            return (<div>
                <h2>Check 3</h2>
                <button onClick={() => nextCheck()}>Next</button>
            </div>)

        case 3:
            return (<div>
                <BeneficiariesList 
                beneficiaries={beneficiaries} nextCheck={nextCheck}/>
                {/* <h2>Step 4</h2>
                <button onClick={()=>nextCheck()}>Next</button> */}
            </div>)
        case 4:
            return (<div>
                <h2>Check 5</h2>
                <button onClick={() => nextCheck()}>Next</button>
            </div>)
        case 5:
            return (<div>
                <h2>Check 6</h2>
                <button onClick={() => onCompleted()}>Next</button>
            </div>)
    }
}
