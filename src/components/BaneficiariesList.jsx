import React, { useState } from 'react';
import { Input, Select, PercentageInput } from "./Inputs"
import { useForm, useFieldArray, useWatch, Controller, useFormState } from "react-hook-form";
import './BeneficiaryList.css';

const styles = {
  formItem: {
    display: 'flex',
    alignItems: 'flex-end',
    width: "100%",
    gap: "1em",
    marginBottom: "1.5em",
  },
  label: {},
  remove: {
    background: '#fff',
    color: '#f35361',
    border: 'none',
    height: "30px",
    fontSize: "24px",
  },
  submit: {
    background: '#fff',
    color: '#18c23d',
    border: 'none',
    height: "30px",
    fontSize: "24px",
  },
  check: {},
};

const formStyles = {
  padding: '2em',
  formGroup: {
    display: "flex",
    alignItems: 'flex-end',
    gap: "14px"
  },
  next: {},
  primaryTotal: {
    color: '#df960e',
    backgroundColor: '#fcf7e8',
    width: "18%",
    float: 'right',
  },
  messageGreen: {
    color: '#18c23d',
    backgroundColor: '#e5f8e9',
  },
  messageRed: {
    color: '#f35361',
    backgroundColor: '#fcecef',
  },
};


export default function BeneficiariesList({nextCheck}) {
  const { register, setValue, formState: { errors }, control, handleSubmit, watch } = useForm({
    defaultValues: {
      formItems: [
        { fullName: "Tom Cruise", birth: "1980-01-01", ssn: "SSN", optional: "", relationship: "Trust", part: "40.0%", check: false, },
        { fullName: "Elon Musk", birth: "1970-01-01", ssn: "SSN", optional: "", relationship: "Trust", part: "20.0%", check: false, },
        { fullName: "Jeff Bezos", birth: "1965-01-01", ssn: "SSN", optional: "", relationship: "Trust", part: "30.0%", check: true, },
      ]
    },
    mode: "onChange"
  });
  const { dirtyFields, isValid } = useFormState({
    control
  });
  const { fields, remove, append } = useFieldArray({
    name: "formItems",
    control
  });
  const [primaryTotal, setPrimaryTotal] = useState(0);
  const [addItem, setAddItem] = useState(false);
  const onCheck = () => {
    // setValue(`formItems[${index}].check`, false);
    setAddItem(true);
  }
  const onSubmit = data => {
    console.log(data);
    // nextCheck();
  }
  const newItem = () => {
    append({ part: 0 });
    setAddItem(false);
    //    append({part: 0});
  };
  const Check = ({ control, index, field }) => {
    const value = useWatch({
      control,
      name: "formItems",
    });
    return (
      <Controller
        control={control}
        name={`formItems.${index}.check`}
        render={({ field }) =>
          value?.[index]?.check === "true" ?
            <button style={styles.submit} onClick={setValue(`formItems[${index}].check`, false)}>
              <i class="uil uil-check"></i>
            </button> : null
        }
        defaultValue={field.check}
      />
    );
  }
  const TotalPercentage = ({ control }) => {
    const value = useWatch({
      control,
      name: "formItems",
    });
    setPrimaryTotal(value.reduce((acc, cur) =>{ 
      const element = parseInt(cur.part);
      return( isNaN(element) ? 0 : element + acc )}, 0));

    return (<div style={{
      ...formStyles.primaryTotal,
      ...(100 < primaryTotal) && formStyles.messageRed,
      ...(100 === primaryTotal) && formStyles.messageGreen
    }}>

      <div>Primary Total:  {primaryTotal}%</div></div>);
  };
  return (
    <form style={formStyles} onSubmit={handleSubmit(onSubmit)}>
      <h3>BENEFICIARIES</h3>
      <br />
      <h3>Primary Beneficiaries</h3>
      <br />
      <div>
        {fields.map((field, index) => {
          return (<div>
            <div key={field.id} style={styles.formItem}>
            <Input label="Full Name" register={register} name={`formItems[${index}].fullName`}
                    required={{ required: { value: true, message: "Full Name is required." }, 
                                maxLength: { value: 30, message: "Full Name can be max 30 characters long." } }} 
                    defaultValue={field.fullName}  
                    placeholder="John Doe" />
            <Input label="Date of Birth" register={register} name={`formItems[${index}].birth`}
                    required={{ required: { value: true, message: "Enter Date of Birthday." } }} 
                    defaultValue={field.birth}  
                    type='date' />                    
            <Select register={register} name={`formItems[${index}].ssn`}
                    required={{ required: { value: true, message: "SSN is required." } }} 
                    defaultValue={field.ssn}
                    options={["SSN", "INN"]} />
            <Input register={register} name={`formItems[${index}].optional`}
                    required={{ maxLength: { value: 40, message: "optional can be max 40 characters long." } }} 
                    defaultValue={field.optional}  
                    placeholder="optional" size='5' />
            <Select register={register} name={`formItems[${index}].relationship`}
                    required={{ required: { value: true, message: "Select Relationship." } }} 
                    defaultValue={field.relationship}
                    label="Relationship" options={["Trust", "noTrust"]} />              
            <PercentageInput  control={control} 
                    name={`formItems[${index}].part`}
                    required={{ required: { value: true, message: "Enter Percentage." },
                    max: { value: 100, message: "Percentage can be max 100 percent." },
                    min: { value: 0, message: "Percentage out of range." } }} 
                    defaultValue={field.part}
                    label="Percentage" />   
              <button type="button" style={styles.remove} onClick={() => remove(index)}>
                <i class="uil uil-times"></i>
              </button>
               {field.check &&
              <button type="button" style={styles.submit} onClick={onCheck}>
                 <i class="uil uil-check"></i>
               </button>}
            </div>
            <div style={formStyles.messageRed} >
              {errors?.formItems?.[index]?.fullName?.message}
              {errors?.formItems?.[index]?.birth?.message}
              {errors?.formItems?.[index]?.ssn?.message}
              {errors?.formItems?.[index]?.part?.message}
            </div>
          </div>
          );
        })}
      </div>
      { addItem && (primaryTotal - 100) ? newItem() : null}
      <br />
      <div style = {{width: "88%"}}><TotalPercentage control={control} /></div>
      <br />
      {/* {console.log(!errors)} */}
      <label style={formStyles.formGroup}>
        <strong>Confingent Beneficiaies</strong>
        <label className="switch">
          <input type="checkbox"  {...register('confident')} />
          <span className="slider round"></span>
        </label>
      </label>
      <br />
      <PercentageInput  control={control} 
                    name={`test`}
                    required={{ required: { value: true, message: "Enter Percentage." },
                    max: { value: 100, message: "Percentage can be max 100 percent." },
                    min: { value: 0, message: "Percentage out of range." } }} 
                    defaultValue={10}
                    label="test Percentage" />   
      <br />
      <input className="button" type="submit" disabled={ !(isValid && !(primaryTotal - 100)) } /> 
      <br />
      <br />
      <button className="button" onClick={() => nextCheck()}>Next</button>
    </form>
  );
}
