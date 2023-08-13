export const useAdFinder = (adStore) => {
  const findAdByProductId = (productId) => {
    const adsFinded = adStore.filter(
      (ad) => ad.productId === Number(productId)
    );
    return adsFinded;
  };

  return { findAdByProductId };
};
