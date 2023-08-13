export const useAdFinder = (adStore) => {
  const findAdByProductId = (productId) => {
    const adsFinded = adStore.filter(
      (ad) => ad.productId === Number(productId)
    );
    return adsFinded;
  };

  const findAdById = (id) => {
    const adsFinded = adStore.filter((ad) => ad.id === id);
    return adsFinded;
  };

  return { findAdByProductId, findAdById };
};
