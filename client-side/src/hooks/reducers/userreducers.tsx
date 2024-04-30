// reducers/userReducer.ts

import User from "@/types/user";
import { SET_USER } from "../actions/userActions";


interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null
};

const userReducer = (state = initialState, action: { type: string; payload: User | null }) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
