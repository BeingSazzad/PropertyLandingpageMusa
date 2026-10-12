import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MOCK_DATA, ProcessStep, ShowcaseModule } from '@/Mockdata';

interface PropertyState {
  processSteps: ProcessStep[];
  showcaseModules: ShowcaseModule[];
  selectedCategory: string;
}

const initialState: PropertyState = {
  processSteps: MOCK_DATA.processSteps,
  showcaseModules: MOCK_DATA.showcaseModules,
  selectedCategory: 'all',
};

export const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = propertySlice.actions;
export default propertySlice.reducer;
