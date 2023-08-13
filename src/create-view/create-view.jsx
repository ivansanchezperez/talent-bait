import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAdFinder } from "../shared/hooks";
import { useSelector } from "react-redux";
import AdCard from "../shared/components/ad-card/ad-card";
import {
  CreateButton,
  ButtonWrapper,
} from "../shared/components/create-button/styles/create-button-styling";
import { useAppDispatch } from "../shared/store/store";
import { updateAd } from "../shared/store/productsAdsReducer";
import { toast } from "sonner";

const CreateView = () => {
  const params = useParams();
  const productAdsStore = useSelector((state) => state.ads);
  const [editedAd, setEditedAd] = useState(null);

  const [productAds, setProductAds] = useState([]);
  const { findAdById } = useAdFinder(productAdsStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const ads = findAdById(params.adId);
    setProductAds(ads);
  }, []);

  const handleAdForm = (adForm) => {
    setEditedAd(adForm);
  };

  const emitSaveAdForm = () => {
    dispatch(updateAd(editedAd));
    toast.success("New Ad created successfully");
  };

  return (
    <>
      <AdCard emitAdForm={handleAdForm} />

      <ButtonWrapper>
        <CreateButton onClick={() => emitSaveAdForm()}>Create</CreateButton>
      </ButtonWrapper>
    </>
  );
};

export default CreateView;
