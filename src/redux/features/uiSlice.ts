import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isDownloadModalOpen: boolean;
  selectedStore: 'apple' | 'google' | null;
  activeProcessStepId: string;
  isMobileMenuOpen: boolean;
  activeHeroFilter: string;
}

const initialState: UIState = {
  isDownloadModalOpen: false,
  selectedStore: null,
  activeProcessStepId: 'step-2',
  isMobileMenuOpen: false,
  activeHeroFilter: 'Rent Auto-Collection',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openDownloadModal: (state, action: PayloadAction<'apple' | 'google' | undefined>) => {
      state.isDownloadModalOpen = true;
      state.selectedStore = action.payload || 'apple';
    },
    closeDownloadModal: (state) => {
      state.isDownloadModalOpen = false;
      state.selectedStore = null;
    },
    setActiveProcessStep: (state, action: PayloadAction<string>) => {
      state.activeProcessStepId = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload;
    },
    setActiveHeroFilter: (state, action: PayloadAction<string>) => {
      state.activeHeroFilter = action.payload;
    },
  },
});

export const {
  openDownloadModal,
  closeDownloadModal,
  setActiveProcessStep,
  toggleMobileMenu,
  setMobileMenuOpen,
  setActiveHeroFilter,
} = uiSlice.actions;

export default uiSlice.reducer;
