import './App.css';
import { useState } from "react";
import Header from "./components/header";
import StepsContent from "./components/StepsContent";

const stepList = [
  {
    stepLabel: "IRA Application",
    stepIcon: "uil uil-file-copy-alt",
  },
  {
    stepLabel: "Risk Assessment",
    stepIcon: "uil uil-abacus",
  },
  {
    stepLabel: "Upload ID",
    stepIcon: "uil uil-scenery",
  }
];

function App() {
  const [currentStep, setcurrentStep] = useState(() => {
    stepList[0].firstStep = true;
    stepList[stepList.length - 1].lastStep = true;
    stepList.forEach(item => item.status = "inactive");
    stepList[0].status = "current";
    return 0;
  });
  
  const nextStep = () => {
    let index = stepList.findIndex(item => item.status === "current");
    console.log("index:"+index);
    if(index+1) {
      stepList[index].status = "done";      
       if( index < stepList.length - 1 ) {
      ++index;
      stepList[index].status = "current";
      setcurrentStep(prevState => prevState + 1);
      console.log("step: "+currentStep);
    }
    } 
  };

  return (
    <div className="grid-container">
      <Header stepList={stepList}></Header>
      <div>
          <StepsContent currentStep={currentStep} nextStep={nextStep} />        
      </div>  
    </div>
  );
}
export default App;
