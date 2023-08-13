import { createSlice } from "@reduxjs/toolkit";
import FBMockImage from "./../../assets/fb-admockups.jpg";

const initialState = {
  ads: [
    {
      id: "0",
      productId: 0,
      content: {
        headline: "",
        image: "",
        descriptionTitle: "",
        descriptionText: "",
        CTAText: "",
      },
    },
    {
      id: "1",
      productId: 1,
      content: {
        headline: "headline",
        image: FBMockImage,
        descriptionTitle: "description-title",
        descriptionText: "description-text",
        CTAText: "text",
      },
    },
    {
      id: "2",
      productId: 1,
      content: {
        headline: "headline-2",
        image: FBMockImage,
        descriptionTitle: "description-title-2",
        descriptionText: "description-text-2",
        CTAText: "text-2",
      },
    },
    {
      id: "3",
      productId: 1,
      content: {
        headline: "headline-3",
        image: FBMockImage,
        descriptionTitle: "description-title-3",
        descriptionText: "description-text-3",
        CTAText: "text-3",
      },
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
