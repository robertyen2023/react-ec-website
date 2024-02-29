import { useState } from 'react';

import './SignUpForm.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    // instead of handling 4 separate form field states,
    // wrap all the fields as a formFields object
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {
        displayName = '',
        email = '',
        password = '',
        confirmPassword = ''
    } = formFields;

    // generalize handling form fields
    const handleChange = (event) => {
        const {
            name = '',
            value = ''
        } = event.target;

        setFormFields({
            ...formFields,
            [name]: value
        });
    };

    return (
        <div className='sign-up-form-container'>
            <h1>Sign up with your email and password</h1>
            <form>
                <label>Display Name</label>
                <input
                    name="displayName"
                    onChange={handleChange}
                    required 
                    type="text"
                    value={displayName}
                />

                <label>Email</label>
                <input
                    name="email"
                    onChange={handleChange}
                    required 
                    type="text"
                    value={email}
                />

                <label>Password</label>
                <input
                    name="password"
                    onChange={handleChange}
                    required 
                    type="text"
                    value={password}
                />

                <label>Confirm Password</label>
                <input
                    name="confirmPassword"
                    onChange={handleChange}
                    required 
                    type="text"
                    value={confirmPassword}
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
