// actions.js
export const addProductToCart = (productId) => ({
    type: 'ADD_PRODUCT_TO_CART',
    payload: productId,
  });
  
  export const removeProductFromCart = (productId) => ({
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: productId,
  });
  
  // נוסיף פעולה נוספת להוספת מוצר
  export const addProduct = (productName, categoryId) => ({
    type: 'ADD_PRODUCT',
    payload: { name: productName, category: categoryId },
  });
  