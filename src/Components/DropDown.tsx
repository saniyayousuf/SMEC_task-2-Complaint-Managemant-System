import React, { ChangeEvent } from 'react';

type DropdownProps = {
  label: string;
  options: { label: string; value: string }[];
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export default function  Dropdown(props:DropdownProps)   {
    const {label, options, name, value, onChange} = props
  return (
    <div className='my-3 py-2 border border-secondary text-center'>
      <label className='fw-bold '>{label } :</label>
      <select className='border-rounded-dark p-2 me-2' name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
