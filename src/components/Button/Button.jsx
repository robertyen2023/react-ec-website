import './Button.scss';

export const BUTTON_TYPE_CLASSES = {
    "GOOGLE-SIGN-IN": 'GOOGLE-SIGN-IN',
    INVERTED: 'INVERTED'
};

const Button = ({ 
    children, 
    buttonType = BUTTON_TYPE_CLASSES.INVERTED, 
    ...otherProps 
}) => {
    const buttonTypeClass = BUTTON_TYPE_CLASSES[buttonType].toLowerCase();
    const buttonClassName = `button-container ${buttonTypeClass}`;

    return (
        <button
            className={buttonClassName}
            {...otherProps}
        >
            {children}
        </button>
    );
}

export default Button;
