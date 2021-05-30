import React from 'react';
import logo from '../icons/check2.svg';
import Steps from './Steps';
import RoundStep from './RoundStep';


export default function Header(props) {
    const stepList = props.stepList;
    const stepsStyles = {
        ul: {
            display: 'flex',
            listStyle: 'none'
        }
 }
  
    return (
        <div className="header">
            <div>
            <img src={logo}  alt="check"/>
             IRA Application
            <h5>IRA Accounts provided by Fidelity Investments</h5>
           </div>
           <Steps stepList={stepList} stepsStyles={stepsStyles} step={RoundStep}></Steps>
         </div>
    )
}
