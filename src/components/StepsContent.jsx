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
        const stepsStyles = {
            ul: {
                listStyle: 'none',
                // display: 'flex',
                // gap: "2em",
            },
            stepsContainer: {
                float: 'left',
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
        const styles = {
            ul: {
                listStyle: 'none',
            },
            li: {
                display: 'flex',
                gap: '0.3em',
            },
            point: {
                    // min-width: '6px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    /* background-color: #2f80ed; */
                    backgroundColor: 'transpurent',
                    border: 'thin solid grey'
            },
            current: {
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#2f80ed',
                border: 'thin solid #2f80ed'
            }
        }    
    switch (props.currentStep) {
        case 0:
            return (
                <div className="content">
                <Steps stepList={checkList} stepsStyles={stepsStyles} step={CheckStep}></Steps> 
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
            return (<div>
                <h2>Step 3</h2>
                </div>
            )
    }
 }
