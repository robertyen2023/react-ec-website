import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user-context';
import { signOutUser } from '../../utils/firebase/config';
import './Navigation.scss';

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    // LOGOUT: 4.
    const signOutHandler = async () => {
        // LOGOUT: 4.1. 藉由auth singleton 
        // 通知firebase/auth
        // 使用者登出
        await signOutUser();
        // const response = 
        // console.log(response);

        // LOGOUT: 4.2. 不能只通知firebase，
        // UserContext中的使用者也要清掉
        setCurrentUser(null);
        alert("You've logged out successfully!");
    };
    
    // LOGOUT: 1.
    const authOrSignOut = currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
        ) : (
            <Link className="nav-link" to="/auth">
                Authentication
            </Link>
        );

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                    { authOrSignOut }
                </div>
            </div>
            <Outlet />
        </>    
    );
}

export default Navigation;
