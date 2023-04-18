const initialState = {
    imageIds: []
  };
  
  const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        
      case 'ADD_IMAGE_TO_FAVORITE':
        return {
          ...state,
          imageIds: [...state.imageIds, action.payload.id]
        };
      case 'REMOVE_IMAGE_FROM_FAVORITE':
        return {
          ...state,
          imageIds: state.imageIds.filter(id => id !== action.payload.id)
        };
      default:
        return state;
    }
  };
  
  export default favoritesReducer;