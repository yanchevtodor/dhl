import React, { useEffect }from 'react'
import { addImage, removeImage } from '../redux/actions';
import { useSelector, useDispatch  } from 'react-redux';

export default function Favorite({id}) {

    const dispatch = useDispatch();
    
    const imageIds = useSelector(state => state.imageIds);
    
    const isInFavorites = imageIds.includes(id)
    
    const handleAddImage = () => {
        if(!isInFavorites){
            dispatch(addImage(id));
        }       
    };

    const handleRemoveImage = () => {
        dispatch(removeImage(id))
    };  

    return (
        <>
            {
                isInFavorites 
                ?
                    <div title="Remove from favorites" className='favorite active' onClick={handleRemoveImage}>&#9829;</div>
                
                :
                    <div title="Add to faforites" className='favorite' onClick={handleAddImage}>&#9829;</div>
                
            }
        </>
        
    )
}
