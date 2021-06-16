import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { useForm, useFieldArray, useWatch, Controller } from "react-hook-form";
import './BeneficiaryList.css';

const styles = {
  formItem: {
    display: 'flex',
    alignItems: 'flex-end',
    width: "100%",
    gap: "1em",
    marginBottom: "1.5em",
  },
  input: {
    border: 'none',
    borderRadius: "4px",
    display: "block",
    height: "30px",
    fontSize: "16px",
    padding: "2px 10px",
    backgroundColor: "#f5f5f5",
  },
  select: {
    boxSizing: 'content-box'
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
  formGroup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: "4px"
  },
  percentage: {
    width: "60px",
  },
  check:{},
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
    width: "20%",
    alignItems: 'flex-end',
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
export const Input = ({ label, register, name, required, ...rest }) => (
  <div style={styles.formGroup}>
    <label style={styles.label}>{label}</label>
    <input  style={styles.input} {...register(name, required )} {...rest} />
  </div>
);


export const Select = ({ label, register, options, name, required, ...rest }) => (
  <div style={styles.formGroup}>
  <label style={styles.label}>{label}</label>
  <select style={{ ...styles.input, ...styles.select }} 
                  {...register(name, required )} {...rest}>
      {options.map(value => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
   </select>
   </div>
  );

export default function TestIndex() {
  const { register, setValue, formState: { errors }, control, handleSubmit, watch } = useForm({
    defaultValues: {
      formItems: [
        { fullName: "Tom Cruise", birth: "1980-01-01", ssn: "SSN", optional: "", relationship: "Trust", part: 40.0, check: false, },
        { fullName: "Elon Musk", birth: "1970-01-01", ssn: "SSN", optional: "", relationship: "Trust", part: 20.0, check: true, },
        { fullName: "Jeff Bezos", birth: "1965-01-01", ssn: "SSN", optional: "", relationship: "Trust", part: 30.0, check: false, },
      ]
    },
    mode: "onChange"
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
  const onSubmit = data => console.log(data);
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
    const total = value.reduce((acc, cur) => acc + parseInt(cur.part), 0);
    setPrimaryTotal(value.reduce((acc, cur) => acc + parseInt(cur.part), 0));
    // console.log(primaryTotal);
    return (<div style={{
      ...formStyles.primaryTotal,
      ...(100 < primaryTotal) && formStyles.messageRed,
      ...(100 === primaryTotal) && formStyles.messageGreen
    }}>
      Primary Total:  {primaryTotal}%</div>);
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
                    required={{ required: true, maxLength: 30 }} defaultValue={field.fullName}  
                    placeholder="John Doe" />
            <Input label="Date of Birth" register={register} name={`formItems[${index}].birth`}
                    required={{ required: true }} defaultValue={field.birth}  
                    type='date' />                    
            <Select register={register} name={`formItems[${index}].ssn`}
                    required={{ required: true }} defaultValue={field.ssn}
                    options={["SSN", "INN"]} />
            <Input register={register} name={`formItems[${index}].optional`}
                    required={{ maxLength: 40 }} defaultValue={field.optional}  
                    placeholder="optional" size='5' />
            <Select register={register} name={`formItems[${index}].relationship`}
                    required={{ required: true }} defaultValue={field.relationship}
                    label="Relationship" options={["Trust", "noTrust"]} />              
              
              <Controller
        control={control}
        name={`formItems[${index}].part`}
        defaultValue={field.part}
        rules={{ required: true, min: 0, max: 100  }}
        render={({ field }) => {
          // sending integer instead of string.
          return (
            <div style={styles.formGroup}>
            <NumberFormat
              style={{ ...styles.input, ...styles.percentage }}
              size="small"
              label="percent"
              // variant="outlined"
              decimalScale={1}
              // allowEmptyFormatting={false}
              control={control}
              suffix={"%"}
              // fixedDecimalScale={true}
              {...field}
              // onChange={(e) => field.onChange(console.log(e.target.value))} 
                onValueChange={(value) => {
                  // console.log({...{...`formItems[${index}].part`},...{part: value.value}})
                  // console.log([...formItems,...(formItems[index]),...{part: value.value}])
                  field = {...field,...{value:value.value}};
                  console.log(field);
                  setValue(`formItems[${index}].part`, value.value);
                  console.log(value);
                  console.log(value.value);
                // const price = currency (getValues("price")).value;
                // const percent = ((price - value.value) / price) * 100;
                // setValue('percent', percent);
              }}
            />
            </div>
          );
        }}
      />
              
              <button type="button" style={styles.remove} onClick={() => remove(index)}>
                <i class="uil uil-times"></i>
              </button>
              <Check {...{ control, index, field }} />
              {/* {(!beneficiary.complited)&& */}
              {field.check && 
              <button style={styles.submit} onClick={onCheck}>
                <i class="uil uil-check"></i>
              </button>}
            </div>
            <div style={formStyles.messageRed} >
              {errors?.formItems?.[index]?.fullName?.type === 'required' && <p>Full Name is required</p>}
              {errors?.formItems?.[index]?.birth?.type === 'required' && <p>Birthday is required</p>}
              {errors?.formItems?.[index]?.ssn?.type === 'required' && <p>SSN is required</p>}
              {errors?.formItems?.[index]?.part?.type === 'required' && <p>Percentage is required</p>}
              {(errors?.formItems?.[index]?.part?.type === 'min' ||
                errors?.formItems?.[index]?.part?.type === 'max') && <p>Percentage must be 0 - 100 %</p>}
            </div>
          </div>
          );
        })}
      </div>
      { addItem && (primaryTotal - 100) && newItem()}
      <br />
      <TotalPercentage control={control} />
      <br />
      <label style={formStyles.formGroup}>
        <strong>Confingent Beneficiaies</strong>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </label>
      <br />
            <br />
      {/* <input className="button" type="submit" disabled/>  */}
      <input className="button" type="submit" />
      <br />
    </form>
  );
}
