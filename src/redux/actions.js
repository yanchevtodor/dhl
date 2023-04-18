

  export const addImage = (id) => ({
    type: 'ADD_IMAGE_TO_FAVORITE',
    payload: {
      id
    }
  });
  
  export const removeImage = (id) => ({
    type: 'REMOVE_IMAGE_FROM_FAVORITE',
    payload: {
      id
    }
  });