import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: []
};

const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    updatePlans: (state, action) => {
      return action.payload;
    },
  },
});

export const { updatePlans } = plansSlice.actions;
export default plansSlice.reducer;

