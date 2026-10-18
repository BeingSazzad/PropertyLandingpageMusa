import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isDownloadModalOpen: boolean;
  isMobileMenuOpen: boolean;
}

const initialState: UIState = {
  isDownloadModalOpen: false,
  isMobileMenuOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openDownloadModal: (state) => {
      state.isDownloadModalOpen = true;
    },
    closeDownloadModal: (state) => {
      state.isDownloadModalOpen = false;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload;
    },
  },
});

export const {
  openDownloadModal,
  closeDownloadModal,
  toggleMobileMenu,
  setMobileMenuOpen,
} = uiSlice.actions;

export default uiSlice.reducer;
