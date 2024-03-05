import { useState, useContext } from 'react';

import './SignInForm.scss';
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/config';
import FormInput from '../FormInput/FormInput';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import { UserContext } from '../../contexts/user-context';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    // 只要hook [a context] into any component like below (using useContext in a component)
    // 則 [該context] 中的資料改變，所有hooked components 的 [component function code] 都會 [re-run]
    // 即使沒有在jsx中使用 the context values，只要該component有被掛到該context，也會 [re-run]
    // .
    // 2. use a context
    const { setCurrentUser } = useContext(UserContext);
    // const userContextValue = useContext(UserContext);
    // console.log(userContextValue);

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

        try {
            const { user: userAuth } = await signInAuthUserWithEmailAndPassword(email, password);
            // LOGOUT: 2.1.
            setCurrentUser(userAuth);

            resetFormFields();
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for the email');
                    break
                case 'auth/user-not-found':
                    alert('no user is associated with this email');
                    break
                default:
                    console.log('An error occurred while handleSubmit', error);       
            }
        }
    };

    const signInWithGoogle = async () => {
        const { user: userAuth } = await signInWithGooglePopup();
        // console.log(userAuth);
        // LOGOUT: 2.2.
        setCurrentUser(userAuth);

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
                <div className='buttons-container'>
                    <Button 
                        type="submit"
                        // buttonType={BUTTON_TYPE_CLASSES.INVERTED}
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
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
