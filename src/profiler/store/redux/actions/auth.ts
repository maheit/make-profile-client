import {
    LOG_IN,
    LOG_OUT,
    AuthActionType,
    SystemState,
    UserState,
} from "../types/auth";

export function login(user: UserState): AuthActionType {
    return {
        type: LOG_IN,
        payload: {
            sessionId: "",
            user,
        },
    };
}

export const logout = (): AuthActionType => {
    return {
        type: LOG_OUT,
    };
};
