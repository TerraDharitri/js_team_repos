export const getIsOperaWalletAvailable = () => {
  return Boolean(window?.isOpera && window?.numbat);
};
