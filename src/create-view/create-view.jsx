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
import { newAd } from "../shared/store/productsAdsReducer";
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
    console.log("adFormCreate: ", adForm);
    setEditedAd(adForm);
  };

  const emitSaveAdForm = () => {
    dispatch(newAd(editedAd));
    toast.success("New Ad created successfully");
  };

  return (
    <>
      <AdCard
        productId={params.productId}
        emitAdForm={handleAdForm}
        isEdition
      />

      <ButtonWrapper>
        <CreateButton onClick={() => emitSaveAdForm()}>Create</CreateButton>
      </ButtonWrapper>
    </>
  );
};

export default CreateView;
