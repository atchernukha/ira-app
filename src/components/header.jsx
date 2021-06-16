import React from 'react';
import logo from '../icons/IRA_logo.svg';
import Steps from './Steps';
import RoundStep from './RoundStep';


export default function Header(props) {
    const stepList = props.stepList;
    const styles = {
        logo: {
            display: "flex",
            fontSize: '1.66em',
            alignItems: 'center',
            // justifyContent: 'center',
            gap: '0.3em',
        },
        sub: {
            fontSize: '0.83em',
        }
    };
    const stepsStyles = {
        ul: {
            display: 'flex',
            listStyle: 'none'
        }
    }

    return (
        <div className="header">
            <div style={styles.sub}>
                <label style={styles.logo}>
                    <img src={logo} alt="check" height="36" width="36"/>
                    <strong> IRA Application</strong>
                </label>
                    IRA Accounts provided by Fidelity Investments
            </div>
            <Steps stepList={stepList} stepsStyles={stepsStyles} step={RoundStep}></Steps>
        </div>
    )
}
