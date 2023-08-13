import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ads: [
    {
      id: 0,
      productId: 0,
      content: { headline: "", image: "", description: "", CTAText: "" },
    },
  ],
};

export const productsAdsSlice = createSlice({
  name: "productsAds",
  initialState,
  reducers: {
    newAd: (state, action) => {
      const newAd = action.payload;

      if (state.ads.length === 1 && state.ads[0].id === 0) {
        state.ads = [newAd];
      } else {
        state.ads = [...state.ads, newAd];
      }
    },
  },
});

export const { addCompany } = productsAdsSlice.actions;
export default productsAdsSlice.reducer;
