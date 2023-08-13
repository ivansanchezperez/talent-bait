import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AdCard from "../shared/components/ad-card/ad-card";
import {
  CreateButton,
  ButtonWrapper,
} from "../shared/components/create-button/styles/create-button-styling";
import { useAppDispatch } from "../shared/store/store";
import { newAd } from "../shared/store/productsAdsReducer";
import { toast } from "sonner";
import { getAbsolutePath } from "../shared/infrastructure/routing";

const CreateView = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [editedAd, setEditedAd] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAdForm = (adForm) => {
    console.log("adFormCreate: ", adForm);
    setEditedAd(adForm);
  };

  const emitSaveAdForm = () => {
    dispatch(newAd(editedAd));
    toast.success("New Ad created successfully");
    navigate(getAbsolutePath("read-view") + `/${params.productId}`);
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
