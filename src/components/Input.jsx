import classNames from 'classnames'
import React, { forwardRef } from 'react'
import './styles/Input.css'

const Input = forwardRef(({
    name, label, value, onChange, id,
    type = 'text', placeHolder, errorMessage, ...restProps
}, ref) => {
    const inputClasses = classNames('form_input');
    const labelClasses = classNames('input_label');
    const errorClasses = classNames('input-error-message');
    const containerClasses = classNames('input_container');

    return (
        <div className={containerClasses}>
            <label className={labelClasses} htmlFor={name}>{label}</label>
            <input ref={ref} className={inputClasses} type={type} 
                value={value} onChange={onChange} name={name} 
                id={id}
                placeholder={placeHolder}
                {...restProps} 
            />
            <span className={errorClasses}>{errorMessage}</span>
        </div>
    )
});

export default Input