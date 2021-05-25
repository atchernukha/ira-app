import React from 'react';
import logo from '../icons/check2.svg';
import Steps from './Steps';


export default function Header(props) {
    const stepList = props.stepList;
    const stepsStyles = {
        display: 'flex',
        listStyle: 'none'
        }
  
    return (
        <div className="header">
            <div>
            <img src={logo}  alt="check"/>
             IRA Application
            <h4>IRA Accounts provided by Fidelity Investments</h4>
           </div>
           <Steps stepList={stepList} stepsStyles={stepsStyles}></Steps>
         </div>
    )
}
