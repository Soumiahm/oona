import types from "./types";

const fetchOffers = () => {
  return {
    type: types.FETCH_OFFERS,
  };
};

const addOffer = (offer) => {
  return {
    type: types.ADD_OFFER,
    payload: offer,
  };
};

export default {
  fetchOffers,
  addOffer,
};
