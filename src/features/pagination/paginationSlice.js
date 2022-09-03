const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  pageVideo: [],
  pageSize: 5,
  pageNumber: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    paginationNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { paginationNumber } = paginationSlice.actions;
export default paginationSlice.reducer;
