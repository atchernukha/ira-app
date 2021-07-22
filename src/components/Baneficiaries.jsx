import React, { useState } from 'react';
import { Input, Select, PercentageInput } from "./Inputs"
import { useForm, useFieldArray, useWatch, useFormState } from "react-hook-form";

const styles = {
    formItem: {
        display: 'flex',
        alignItems: 'flex-end',
        width: "100%",
        gap: "1em",
        marginBottom: "1.5em",
    },
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
    formGroup: {
        display: "flex",
        alignItems: 'flex-end',
        gap: "14px"
    },
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


export default function Beneficiaries({ nextCheck }) {
    const { register, formState: { errors }, control, handleSubmit, } = useForm({
        defaultValues: {
            formItems: [
                { fullName: "Tom Cruise", birth: "1980-01-01", ssn: "SSN", optional: "", relationship: "Trust", part: 40.0, },
                { fullName: "Elon Musk", birth: "1970-01-01", ssn: "SSN", optional: "", relationship: "Trust", part: 20.0, },
                { fullName: "Jeff Bezos", birth: "1965-01-01", ssn: "SSN", optional: "", relationship: "Trust", part: 30.0, },
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
     const onCheck = () => {
        append({ part: 0 });
    }
    const onSubmit = data => {
        console.log(data);
        nextCheck();
    }
    const TotalPercentage = ({ control }) => {
        const value = useWatch({
            control,
            name: "formItems",
        });

        setPrimaryTotal(value.reduce((acc, cur) => {
            const element = parseInt(cur.part);
            return (isNaN(element) ? 0 : element + acc)
        }, 0));

        return (
            <div style={{
                ...formStyles.primaryTotal,
                ...(100 < primaryTotal) && formStyles.messageRed,
                ...(100 === primaryTotal) && formStyles.messageGreen
            }}>
                <div>Primary Total: {primaryTotal}%</div>
            </div>
        );
    };
    return (
        <form style={formStyles} onSubmit={handleSubmit(onSubmit)}>
            <h3>BENEFICIARIES</h3>
            <br />
            <h3>Primary Beneficiaries</h3>
            <br />
            <div>
                {fields.map((field, index) => 
                 <div>
                        <div key={field.id} style={styles.formItem}>
                            <Input label="Full Name" register={register} name={`formItems[${index}].fullName`}
                                required={{
                                    required: { value: true, message: "Full Name is required." },
                                    maxLength: { value: 30, message: "Full Name can be max 30 characters long." }
                                }}
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
                            <PercentageInput control={control}
                                name={`formItems[${index}].part`}
                                required={{
                                    required: { value: true, message: "Enter Percentage." },
                                    max: { value: 100, message: "Percentage can be max 100 percent." },
                                    min: { value: 0, message: "Percentage out of range." }
                                }}
                                defaultValue={field.part}
                                label="Percentage" />
                            <button type="button" style={styles.remove} onClick={() => 
                                (fields.length > 1) && remove(index) } >
                                {/* (fields.length > 0) ? remove(index) : onCheck() } > */}
                                <i class="uil uil-times"></i>
                            </button>
                            {isValid && (fields.length === index + 1) &&
                                <button type="button" style={styles.submit} onClick={onCheck}>
                                    <i class="uil uil-check"></i>
                                </button>
                            }
                        </div>
                        <div style={formStyles.messageRed} >
                            {errors?.formItems?.[index]?.fullName?.message}
                            {errors?.formItems?.[index]?.birth?.message}
                            {errors?.formItems?.[index]?.ssn?.message}
                            {errors?.formItems?.[index]?.part?.message}
                        </div>
                    </div>
                    )
                }
            </div>
            <br />
            <div style={{ width: "88%" }}><TotalPercentage control={control} /></div>
            <br />
            <label style={formStyles.formGroup}>
                <strong>Confingent Beneficiaies</strong>
                <label className="switch">
                    <input type="checkbox"  {...register('confident')} />
                    <span className="slider round"></span>
                </label>
            </label>
            <br />
            <br />
            <input className="button" type="submit"  value="Next" disabled={ !(isValid && !(primaryTotal - 100)) } />
            {/* <br />
            <br />
            <button className="button" onClick={() => nextCheck()}>Next</button> */}
        </form>
    );
}
