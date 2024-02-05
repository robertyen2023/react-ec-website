import { signInWithGooglePopup } from '../../utils/firebase/config';

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    };

    return (
        <div>
            <h1>SIgn In Page</h1>
            <button onClick={logGoogleUser}>Sign In with Google Popup</button>
        </div>
    );
};

export default SignIn;
