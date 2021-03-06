import React from 'react';
import NumberFormat from 'react-number-format';
import { Controller } from "react-hook-form";

const styles = {
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
    formGroup: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      gap: "4px"
    },
    percentage: {
      width: "60px",
    },
  };

export const Input = ({ label, register, name, required, ...rest }) => (
    <div style={styles.formGroup}>
        <label style={styles.label}>{label}</label>
        <input style={styles.input} {...register(name, required)} {...rest} />
    </div>
);


export const Select = ({ label, register, options, name, required, ...rest }) => (
    <div style={styles.formGroup}>
        <label style={styles.label}>{label}</label>
        <select style={{ ...styles.input, ...styles.select }}
            {...register(name, required)} {...rest}>
            {options.map(value => (
                <option key={value} value={value}>
                    {value}
                </option>
            ))}
        </select>
    </div>
);

export const PercentageInput = ({ control, label, name, required, ...rest }) => (
        <Controller
            control={control}
            label={label}
            name={name}
            rules={required}
            {...rest}
            render={({ field }) => {
                // sending integer instead of string.
                return (
                    // <button onClick={() => field.onChange("15")}>On Change</button>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>{label}</label>
                        <NumberFormat
                            defaultValue={rest.defaultValue}
                            decimalScale={1}
                            style={{ ...styles.input, ...styles.percentage }}
                            suffix={"%"}
                            onValueChange={(values) => {
                                // console.log(field);
                                return field.onChange(values.floatValue);
                            }}                            
                            // {...field}
                        />
                    </div>
                );
            }}
        />
    );