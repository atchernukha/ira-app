import React, {useState} from 'react';
import BeneficiariesList from './BaneficiariesList';
import CheckList from "./checkList";
import Steps from './Steps';

const checkList = [
    {
      stepLabel: "Personal Information",
    },
    {
      stepLabel: "Contact Information",
    },
    {
        stepLabel: "Relationship",
    },
    {
        stepLabel: "Beneficiaries",
    },
    {
        stepLabel: "Account Characteristics",
    },
    
    {
        stepLabel: "Review",
    }
  ];
  

export default function StepsContent(props) {
    const beneficiaries = [
        { id: 1, fullName: "Tom Cruise", birth: "1980-01-01", ssn: "SSN", optional: "", relationship: "Trust", part: 50, complited: false },
        { id: 2, fullName: "Elon Musk", birth: "1970-01-01", ssn: "SSN", optional: "", relationship: "Trust", part: 50, complited: false },
        { id: 3, fullName: "Jeff Bezos", birth: "1965-01-01", ssn: "SSN", optional: "", relationship: "Trust", part: 50, complited: false }
    ];
    const [currentCheck, setcurrentCheck] = useState(() => {
        checkList.forEach(item => item.status = "inactive");
        checkList[0].status = "current";
        return 0;
      });
        const stepsStyles = {
            listStyle: 'none'
        }      
    switch (props.currentStep) {
        case 0:
            return (
                <div className="content">
                <CheckList></CheckList>
                <BeneficiariesList beneficiaries={beneficiaries} ></BeneficiariesList>
               </div>                
            )
        case 1:
            return (
                 <div className="content">
                <h2>Step 2</h2>    
                <Steps stepList={checkList} stepsStyles={stepsStyles}></Steps>                
                <BeneficiariesList beneficiaries={beneficiaries} ></BeneficiariesList>
                </div>                
            )
        case 2:
            return (
                <h2>Step 3</h2>
            )
    }
 }
