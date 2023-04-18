import { Link } from 'react-router-dom';
import Card from '../components/Card'
import { useSelector } from 'react-redux';

export default function Favorites({images}) {
    
    const imagesIds = useSelector(state => state.imageIds);

    const favoriteImages = images.filter(image => imagesIds.includes(image.id));


    return (
        <div className='favorites page'>
            {
                imagesIds.length > 0 
                ?
                    <div className='images'>
                        { favoriteImages && favoriteImages.map((image, index) => <Card image={image} key={index}/> ) }    
                    </div>
                :
                    <>
                        <h1>You don't have any favorite photos yet.</h1>
                        <Link to={`/album/1`}>Explore and enjoy our photo albums.</Link>
                    </>
            }
           
        </div>
    )
}
