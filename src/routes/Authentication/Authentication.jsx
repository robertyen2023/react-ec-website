// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

// import {
//     auth,
//     signInWithGooglePopup,
//     signInWithGoogleRedirect,
//     createUserDocumentFromAuth 
// } from '../../utils/firebase/config';

import SignInForm from '../../components/SignInForm/SignInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
// import Button, { BUTTON_TYPE_CLASSES } from '../../components/Button/Button';

import './Authentication.scss';

const Authentication = () => {
    // useEffect(() => {
    //     // useEffect must NOT return anything besides a function
    //     // for example, an async function is not valid
    //     // .
    //     // that's why we need to wrap an async function 
    //     // inside of the callback of useEffect
    //     // like below 
    //     // (instead of make [the callback async like `useEffect(async () => { .. }, [])`])
    //     const fetchRedirectResult = async () => {
    //         // [the auth singleton] is like [an authentication memory bank]
    //         // that tracks all of our authentication
    //         // .
    //         // even though our entire web app has unmounted from the browser
    //         // (whenever the user [navigates away from our website])
    //         // and redirect to other web app (i.e. google auth. pg)
    //         // we can still apply [the getRedirectResult and auth singleton]
    //         // to track the authentication memory
    //         // to get [the authenticated user] info.
    //         // in order for us to create the user document in the firestore
    //         const response = await getRedirectResult(auth);

    //         // there's a chance we might get null response
    //         // i.e. before applying [the Google Redirect User Flow]
    //         if (response) {
    //             const { user: userAuth } = response;
    //             const userDocRef = await createUserDocumentFromAuth(userAuth);
    //             console.log(userDocRef);
    //         }
    //     };
    //     fetchRedirectResult();
    // }, []);
    // const logGoogleRedirectUser = async () => {
    //     const { user: userAuth } = await signInWithGoogleRedirect();
    //     // console.log(userAuth);
    // };

    // const logGoogleUser = async () => {
    //     const { user: userAuth } = await signInWithGooglePopup();
    //     const userDocRef= await createUserDocumentFromAuth(userAuth);
    //     console.log(userDocRef);
    // };

    return (
        <div className='authentication-container'>
            {/*             
                <div>
                    <Button
                        buttonType={BUTTON_TYPE_CLASSES['GOOGLE-SIGN-IN']}
                        type="submit"
                        onClick={logGoogleUser}
                    >
                        Sign In with Google Popup
                    </Button>
                    <button onClick={logGoogleRedirectUser}>Sign In with Google Redirect</button>
                </div> 
            */}
            <SignUpForm />
            <SignInForm />
        </div>
    );
};

export default Authentication;
