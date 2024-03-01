import './FormInput.scss';

                        // the function rest parameters syntax
const FormInput = ({ labelText, ...inputOptions }) => {
                        // for the inputOptions.value, 
                        // tha value means if user types any text or not
    const labelClassName = (inputOptions.value ? 'shrink' : '') + ' ' + 'form-input-label';
    const label = labelText && <label className={labelClassName}>{labelText}</label>

    return (
        <div className="group">
            <input
                className='form-input'
                {...inputOptions}
            />
            {label}
        </div>
    );
}

export default FormInput;
