import shop_data from './shop_data'
const INITAIL_STATE = {
    collections: shop_data
  }

  const shopReducer = (state = INITAIL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
  }

  export default shopReducer;