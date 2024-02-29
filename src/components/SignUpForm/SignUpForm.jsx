import { useState } from 'react';

import './SignUpForm.scss';
import { 
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from '../../utils/firebase/config';

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

    // * Controlled v.s. Uncontrolled
    // - Controlled: single source of truth、more flexible
    // - Controlled cont.: state, value, "data handler"
    // - Uncontrolled: easy、less settings
    // - Uncontrolled: NOT able to influence the data / value
    // - Uncontrolled cont.: local state, default value, [ref, $ref.current.value]
    // .
    // * generalize handling form fields
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

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };
    const handleSignUpFormSubmit = async (event) => {
        event.preventDefault();
        
        if (password !== confirmPassword) {
            alert('The passwords you typed are inconsistent');
            return;
        }

        try {
            // * Step 1.
            // .
            // * The auth object we'll get
            // - the auth object we'll get 
            // - would be in the same shape
            // - even though when we use diff. auth methods
            // - i.e. 1. auth with email and password
            // - i.e. 2. auth with fb auth.
            // - just the value might be different
            // - i.e. displayName: null when we use [i.e. 1.]
            // - cuz we won't pass a display name to the auth. method (i.e. 1.)
            // - when we use it
            const { user: userAuth } = await createAuthUserWithEmailAndPassword(email, password);

            // Step 2.
            const userDocRef = await createUserDocumentFromAuth(userAuth, { displayName });
            console.log(userDocRef);

            // Step 3.
            resetFormFields();

            alert("You've signed up successfully !!");
        } catch (error) {
            // leverage the firebase error code here
            // for handling firebase auth. requesting errors
            if (error.code === 'auth/weak-password') {
                alert('Cannot create user, the password is too weak.');
            } else if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, the email is already in use.');
            } else {
                console.log('An error occurred while createAuthUserWithEmailAndPassword', error);
            }
        }
    };

    return (
        <div className='sign-up-form-container'>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSignUpFormSubmit}>
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
                    type="email"
                    value={email}
                />

                <label>Password</label>
                <input
                    name="password"
                    onChange={handleChange}
                    required 
                    type="password"
                    value={password}
                />

                <label>Confirm Password</label>
                <input
                    name="confirmPassword"
                    onChange={handleChange}
                    required 
                    type="password"
                    value={confirmPassword}
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
