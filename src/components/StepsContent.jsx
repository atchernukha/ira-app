import React, {useState} from 'react';
import Steps from './Steps';
import CheckStep from './CheckStep';
import CheckContent from './CheckContent';

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

    const [currentCheck, setcurrentCheck] = useState(() => {
        checkList.forEach(item => item.status = "inactive");
        checkList[0].status = "current";
        return 0;
      });
        const checkStyles = {
            ul: {
                listStyle: 'none',
                fontSize: '1.5rem',
                lineHeight: '2.5',
                paddingInline: '0px',
            },
            stepsContainer: {
                width: '270px',
                borderRight: '0.1rem #e0e0e0 solid'
            }
        };
        const nextCheck = () => {
            let index = checkList.findIndex(item => item.status === "current");
            if(index+1) {
              checkList[index].status = "done";      
               if( index < checkList.length - 1 ) {
              ++index;
              checkList[index].status = "current";
              setcurrentCheck(prevState => prevState + 1);
              }
            } 
          };

    switch (props.currentStep) {
        case 0:
            return (
                <div className="content">
                <Steps stepList={checkList} stepsStyles={checkStyles} step={CheckStep}/> 
                <CheckContent currentCheck={currentCheck} 
                              nextCheck={nextCheck} 
                              onCompleted={props.onCompleted}/>                    
                </div>                
            )
        case 1:
            return (
                 <div className="content">
                <h2>Step 2</h2>    
                 </div>                
            )
        case 2:
            return (<div className="content">
                <h2>Step 3</h2>
                </div>
            )
    }
 }
