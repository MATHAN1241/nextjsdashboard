import User from '@/types/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  name1:string;
  email1:string;
  id1:string;
}

const initialState: AuthState = {
  name1:'',
  email1:'',
  id1:''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
 
  reducers: {
    setProfile(state, action: PayloadAction<Partial<AuthState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setProfile} = authSlice.actions;
export default authSlice.reducer;

