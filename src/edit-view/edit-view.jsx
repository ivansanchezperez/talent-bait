import { Navigate, useNavigate, useParams } from "react-router-dom";
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
import { getAbsolutePath } from "../shared/infrastructure/routing";

const EditView = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const productAdsStore = useSelector((state) => state.ads);
  const { findAdById } = useAdFinder(productAdsStore);

  const [editedAd, setEditedAd] = useState(null);
  const [productAds, setProductAds] = useState([]);

  useEffect(() => {
    const ads = findAdById(params.adId);
    setProductAds(ads);
  }, []);

  const handleAdForm = (adForm) => {
    setEditedAd(adForm);
  };

  const emitSaveAdForm = () => {
    dispatch(updateAd(editedAd));
    toast.success("Changes were saved successfully");
    navigate(getAbsolutePath("read-view") + `/${params.productId}`);
  };

  return (
    <>
      {productAds.map((ad) => {
        return (
          <AdCard
            productId={params.productId}
            id={ad.id}
            image={ad.content.image}
            headline={ad.content.headline}
            descriptionTitle={ad.content.descriptionTitle}
            descriptionText={ad.content.descriptionText}
            CTAText={ad.content.CTAText}
            isEdition
            emitAdForm={handleAdForm}
          />
        );
      })}
      <ButtonWrapper>
        <CreateButton onClick={() => emitSaveAdForm()}>Save</CreateButton>
      </ButtonWrapper>
    </>
  );
};

export default EditView;
