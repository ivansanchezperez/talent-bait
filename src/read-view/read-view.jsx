import "./styles/read-view.css";
import { toast } from "sonner";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAbsolutePath } from "../shared/infrastructure/routing";
import { useAdFinder } from "../shared/hooks";
import { useSelector } from "react-redux";
import {
  CreateButton,
  ButtonWrapper,
} from "../shared/components/create-button/styles/create-button-styling";
import GlobalModal from "../shared/components/global-modal/global-modal";
import AdCard from "../shared/components/ad-card/ad-card";
import {
  TwoColumnGrid,
  AdModalWrapper,
  AdModalReadView,
} from "./styles/read-view-styling";
import { useAppDispatch } from "../shared/store/store";
import { removeAd } from "../shared/store/productsAdsReducer";

const ReadView = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const productAdsStore = useSelector((state) => state.ads);

  const [productAds, setProductAds] = useState([]);
  const [adSelectet, setAdSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { findAdByProductId } = useAdFinder(productAdsStore);

  useEffect(() => {
    if (params.length === 0) return navigate(getAbsolutePath("index-view"));
    const ads = findAdByProductId(params.productId);
    setProductAds(ads);
    window.scrollTo(0, 0);
  }, []);

  const handleAdEdition = (adId) => {
    const editViewPath = getAbsolutePath("edit-view");
    navigate(`${editViewPath}/${params.productId}/${adId}`);
  };

  const handleAdCreation = () => {
    const createView = getAbsolutePath("create-view");
    navigate(`${createView}/${params.productId}`);
  };

  const handleAdRemove = () => {
    dispatch(removeAd(adSelectet));
    navigate(getAbsolutePath("index-view"));
    toast.success("Ad removed successfully");
  };

  const showModal = (adId) => {
    setAdSelected(adId);
    setIsModalOpen(true);
  };

  return (
    <>
      <GlobalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>
          <span style={{ color: "black" }}>
            Are you sure you want to delete this ad?
          </span>
          <div className="read-view__modal-button-wrapper">
            <button
              className="read-view__modal-button--green read-view__modal-button"
              onClick={() => handleAdRemove()}
            >
              Yes
            </button>
            <button
              className="read-view__modal-button--red read-view__modal-button"
              onClick={() => setIsModalOpen(false)}
            >
              No
            </button>
          </div>
        </div>
      </GlobalModal>
      {productAds.length > 0 ? (
        <div style={{ marginTop: "90px" }}>
          <TwoColumnGrid>
            {productAds.map((ad) => {
              return (
                <AdModalWrapper>
                  <AdModalReadView>
                    <div></div>
                  </AdModalReadView>
                  <div className="button-container">
                    <button id="Edit" onClick={() => handleAdEdition(ad.id)}>
                      Edit
                    </button>
                    <button id="Delete" onClick={() => showModal(ad.id)}>
                      Delete
                    </button>
                  </div>
                  <AdCard
                    id={ad.id}
                    image={ad.content.image}
                    headline={ad.content.headline}
                    descriptionTitle={ad.content.descriptionTitle}
                    descriptionText={ad.content.descriptionText}
                    CTAText={ad.content.CTAText}
                  />
                </AdModalWrapper>
              );
            })}
          </TwoColumnGrid>
        </div>
      ) : (
        <div className="read-view__no-ads">
          <span className="read-view__no-ads-text">
            There are no ads for this product yet 😁
          </span>
        </div>
      )}
      <ButtonWrapper>
        <CreateButton onClick={() => handleAdCreation()}>Create</CreateButton>
      </ButtonWrapper>
    </>
  );
};

export default ReadView;
