import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentStep: 1,
    formData: {}
};

const jewelleryFormSlice = createSlice({
    name: "jewelleryFormSlice",
    initialState,
    reducers: {
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload;
        }
    }
})

export const jewelleryFormReducer = jewelleryFormSlice.reducer;
export const { setCurrentStep } = jewelleryFormSlice.actions;