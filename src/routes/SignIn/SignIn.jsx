import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/config';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user: userAuth } = await signInWithGooglePopup();
        const userDocRef= await createUserDocumentFromAuth(userAuth);
        console.log(userDocRef);
    };

    return (
        <div>
            <h1>SIgn In Page</h1>
            <button onClick={logGoogleUser}>Sign In with Google Popup</button>
        </div>
    );
};

export default SignIn;
