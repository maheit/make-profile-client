import {
    SystemState,
    AuthActionType,
    LOG_IN,
    LOG_OUT,
    SIGN_UP,
} from "../types/auth";

const initialState: SystemState = {
    loggedIn: true,
    sessionId: undefined,
    user: undefined,
};

const Auth = (state = initialState, action: AuthActionType) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                loggedIn: true,
                sessionId: action.payload.sessionId,
                user: action.payload.user,
            };
        }
        case LOG_OUT: {
            return {
                ...state,
                loggedIn: false,
                sessionId: undefined,
                user: undefined,
            };
        }
        default:
            return state;
    }
};

export default Auth;
