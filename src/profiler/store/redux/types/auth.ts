export const LOG_IN = "LOGIN";
export const LOG_OUT = "LOGOUT";
export const SIGN_UP = "SIGNUP";
export const FETCH_USER = "FETCH_USER";

export interface UserState {
    userName: string;
    email: string;
    userId: string;
}

export interface SystemState {
    loggedIn: boolean;
    sessionId: string | undefined;
    user?: UserState | undefined;
}

// Action types
interface LoginAction {
    type: typeof LOG_IN;
    payload: any;
}

interface LogoutAction {
    type: typeof LOG_OUT;
}

interface SignupAction {
    type: typeof SIGN_UP;
    payload: any;
}

interface FethUser {
    type: typeof FETCH_USER;
    payload: any;
}

export type AuthActionType =
    | LoginAction
    | LogoutAction
    | SignupAction
    | FethUser;
