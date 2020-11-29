export const initialState = {
  portfolioItem: null
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_PORTFOLIO_ITEM':
      return {
        portfolioItem: action.item
      };

    default:
      return state;
  }
}

export default reducer
