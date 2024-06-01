import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id:string;
  email: string;
  name: string;
  category: string;
}

const initialState: UserState = {
    id:'',
  email: '',
  name: '',
  category: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<UserState>) => {
      state.id=action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.category = action.payload.category;
    },
  },
});

export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;