import "./styles/read-view.css";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAbsolutePath } from "../shared/infrastructure/routing";
import { useAdFinder } from "./../shared/hooks";
import { useSelector } from "react-redux";
import { CreateButton } from "../shared/components/create-button/styles/create-button-styling";
import AdCard from "../shared/components/ad-card/ad-card";
import { TwoColumnGrid } from "./styles/read-view-styling";

const ReadView = () => {
  const params = useParams();
  const navigate = useNavigate();
  const productAdsStore = useSelector((state) => state.ads);

  const [productAds, setProductAds] = useState([]);
  const { findAdByProductId } = useAdFinder(productAdsStore);

  useEffect(() => {
    if (params.length === 0) return navigate(getAbsolutePath("index-view"));
    const ads = findAdByProductId(params.productId);
    setProductAds(ads);
  }, []);

  return (
    <>
      {productAds.length > 0 ? (
        <TwoColumnGrid>
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
        </TwoColumnGrid>
      ) : (
        <div className="read-view__no-ads">
          <span className="read-view__no-ads-text">
            There are no ads for this product yet 😁
          </span>
          <CreateButton>Create</CreateButton>
        </div>
      )}
    </>
  );
};

export default ReadView;
