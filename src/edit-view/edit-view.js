import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAbsolutePath } from "../shared/infrastructure/routing";
import { useAdFinder } from "../shared/hooks";
import { useSelector } from "react-redux";
import { CreateButton } from "../shared/components/create-button/styles/create-button-styling";
import AdCard from "../shared/components/ad-card/ad-card";
import {
  TwoColumnGrid,
  AdModalWrapper,
  AdModalReadView,
} from "./styles/edit-view-styling";

const EditView = () => {
  const params = useParams();
  const productAdsStore = useSelector((state) => state.ads);

  const [productAds, setProductAds] = useState([]);
  const { findAdById } = useAdFinder(productAdsStore);

  useEffect(() => {
    const ads = findAdById(params.adId);
    setProductAds(ads);
  }, []);

  return (
    <>
      {productAds.map((ad) => {
        return (
          <AdCard
            id={ad.id}
            image={ad.content.image}
            headline={ad.content.headline}
            descriptionTitle={ad.content.descriptionTitle}
            descriptionText={ad.content.descriptionText}
            CTAText={ad.content.CTAText}
          />
        );
      })}
    </>
  );
};

export default EditView;
