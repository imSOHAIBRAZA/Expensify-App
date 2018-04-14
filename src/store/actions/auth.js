import { firebase, googleAuthProvider } from '../../firebase/firebase';

export const login = (uid) => ({
        type: 'LOGIN',
        uid
    });

// **** SIGNIN **** //
export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

// **** LOGOUT **** //
export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}