// reducers.js
const initialState = {
    categories: [], // הוספת סטייט לקטגוריות
    products: [],
    cartItems: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART':
        // למשל, הוספת מוצר לסל
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
  
      case 'REMOVE_PRODUCT_FROM_CART':
        // למשל, הסרת מוצר מהסל
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item !== action.payload),
        };
  
      // הוספת מקרה להוספת מוצר
      case 'ADD_PRODUCT':
        return {
          ...state,
          products: [...state.products, action.payload],
        };
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  