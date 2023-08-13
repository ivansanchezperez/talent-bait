export const useAdFinder = (adStore) => {
  const findAdByProductId = (productId) => {
    const adsFinded = adStore.filter((ad) => ad.productId === productId);
    return adsFinded;
  };

  return { findAdByProductId };
};
