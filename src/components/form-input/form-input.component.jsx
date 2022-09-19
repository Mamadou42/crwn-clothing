import './form-input.styles.scss';

const FormInput = ({label, ...otherProps}) => {
    return (
        <div className="group">
            <input className="form-input" required {...otherProps} />
            {
                label && (
                    <label className={`${otherProps.value.lenght ? 'shrink' : ''} form-input-label`}>{label}</label>
                )
            }
        </div>
    )
};

export default FormInput;