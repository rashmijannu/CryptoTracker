import { createSlice } from '@reduxjs/toolkit';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    assets: [
      { symbol: "BTC", amount: 0.1 },
      { symbol: "ETH", amount: 2 }
    ],
    theme: 'light'
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    }
  }
});

export const { toggleTheme } = portfolioSlice.actions;
export default portfolioSlice.reducer;
