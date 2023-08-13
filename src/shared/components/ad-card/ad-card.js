import productData from "./../../../assets/shop_data.json";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FBMockImage from "./../../../assets/fb-admockups.jpg";
import {
  AdHeader,
  AdLogo,
  AdHeaderDescription,
  AdSection,
  AdHeadLine,
  AdImage,
  AdDescriptionTitle,
  AdDescriptionText,
  AdCTA,
  AdWrapper,
  AdSocialMedia,
  AdDescriptionWrapper,
  AdEditButton,
} from "./styles/ad-card-styling";

const AdCard = ({
  id,
  headline,
  image,
  descriptionTitle,
  descriptionText,
  CTAText,
}) => {
  const initialAdFormState = {
    id: id ?? uuidv4(),
    headline: headline ?? "",
    image: image ?? FBMockImage,
    descriptionTitle: descriptionTitle ?? "",
    descriptionText: descriptionText ?? "",
    CTAText: CTAText ?? "",
  };
  const [isFileInputVisible, setFileInputVisible] = useState(false);
  const [adForm, setAdForm] = useState(initialAdFormState);

  const toggleFileInput = () => {
    setFileInputVisible(!isFileInputVisible);
  };

  const handleFileInputChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFileInputVisible(false);
    }
    // Handle the file upload logic here
  };

  return (
    <AdWrapper key={id}>
      <AdSection>
        <AdHeader>
          <AdLogo>
            <figure>
              <div>
                <img src={productData.logo} alt="logo" />
              </div>
            </figure>
          </AdLogo>
          <AdHeaderDescription>
            <span>sportinggoods.com</span>
            <span>Sponsored · 🌍</span>
          </AdHeaderDescription>
        </AdHeader>
        <AdHeadLine value={adForm.headline} />
        <AdImage>
          <figure>
            <div style={{ position: "relative" }}>
              <input
                type="file"
                style={{ display: "none" }} // Hide the input initially
                onChange={handleFileInputChange}
                ref={(input) => {
                  if (input && isFileInputVisible) {
                    input.click();
                  }
                }}
              />
              <img src={adForm.image} alt="logo" />
              <AdEditButton
                onClick={toggleFileInput} // Toggle the input on clicking the image
              >
                <span>✏️</span>
              </AdEditButton>
            </div>
          </figure>
        </AdImage>
        <AdDescriptionWrapper>
          <div>
            <span style={{ fontSize: "15px" }}>sportinggoods.com</span>
            <AdDescriptionTitle value={adForm.descriptionTitle} />
            <AdDescriptionText value={adForm.descriptionText} />
          </div>
          <div>
            <AdCTA>
              <input value={adForm.CTAText} />
            </AdCTA>
          </div>
        </AdDescriptionWrapper>
        <AdSocialMedia>
          <span>👍Like</span>
          <span>💭Comment</span>
          <span>➡️Share</span>
        </AdSocialMedia>
      </AdSection>
    </AdWrapper>
  );
};

export default AdCard;
