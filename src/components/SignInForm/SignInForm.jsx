import { useState } from 'react';

import './SignInForm.scss';
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
} from '../../utils/firebase/config';
import FormInput from '../FormInput/FormInput';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {
        email = '',
        password = '',
    } = formFields;

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
    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    const signInWithGoogle = async () => {
        const { user: userAuth } = await signInWithGooglePopup();
        // console.log(userAuth);

        // ==<font color=green>登入時，</font>==
        // ==<font color=green>只有 signInWithGoogle 需要 createUserDocumentFromAuth ???</font>==
        const userDocRef= await createUserDocumentFromAuth(userAuth);
        console.log(userDocRef);
    };

    return (
        <div className='sign-in-form-container'>
            <h2>Already have an account</h2>
            <span>Sign in with your email  and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    labelText="Email"

                    name="email"
                    onChange={handleChange}
                    required 
                    type="email"
                    value={email}
                />

                <FormInput
                    labelText="Password"

                    name="password"
                    onChange={handleChange}
                    required 
                    type="password"
                    value={password}
                />

                <Button 
                    type="submit"
                    buttonType={BUTTON_TYPE_CLASSES.INVERTED}
                >
                    Sign In
                </Button>

                {/*
                    In a form, 
                    the defalut value of all the buttons would be type='submit',
                    ==so it's important to specify type='button' on the second and the following buttons==
                    if you don't want the buttons act like a form submit button.
                 */}
                <Button 
                    type="button"
                    buttonType={BUTTON_TYPE_CLASSES['GOOGLE-SIGN-IN']}
                    onClick={signInWithGoogle}
                >
                    Google Sign In
                </Button>
            </form>
        </div>
    );
};

export default SignInForm;
