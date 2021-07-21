import Beneficiaries from './Baneficiaries'

export default function CheckContent({ currentCheck, nextCheck, onCompleted }) {

    switch (currentCheck) {
        case 0:
            return (
                <div>
                    <h2>Check 1</h2>
                    <button className="button" onClick={() => nextCheck()}>Next</button>
                </div>
            )
        case 1:
            return (
                <div >
                    <h2>Check 2</h2>
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
                <Beneficiaries nextCheck={nextCheck} />
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
