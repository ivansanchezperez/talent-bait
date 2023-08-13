import productData from "./../../../assets/shop_data.json";
import { useState } from "react";

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

const AdCard = () => {
  const [isFileInputVisible, setFileInputVisible] = useState(false);

  const toggleFileInput = () => {
    setFileInputVisible(!isFileInputVisible);
  };

  const handleFileInputChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      // No file selected, hide the input
      setFileInputVisible(false);
    }
    // Handle the file upload logic here
  };

  return (
    <AdWrapper>
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
        <AdHeadLine />
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
              <img src={productData.logo} alt="logo" />
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
            <AdDescriptionTitle />
            <AdDescriptionText />
          </div>
          <div>
            <AdCTA>
              <input value={"Download"} />
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
