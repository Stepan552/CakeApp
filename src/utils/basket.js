export const receiveItemsFromStorage = () => {
  const items = localStorage.getItem("goods");
  return items ? JSON.parse(items) : [];
};
export const receiveTotalPriceFromStorage = () => {
  const totalPrice = localStorage.getItem("totalPrice");
  return totalPrice ? totalPrice : 0;
};
