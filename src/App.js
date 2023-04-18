import { useEffect,useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Albums from './components/Albums';
import Header from './components/Header';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


function App() {

  const [images, setImages] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        setImages(data)
        // group photos by albumId
        const groupedAlbums = data.reduce((acc, photo) => {
          if (!acc[photo.albumId]) {
            acc[photo.albumId] = [];
          }
          acc[photo.albumId].push(photo);
          return acc;
        }, {});

        // convert grouped albums to an array of album objects
        const albumArray = Object.entries(groupedAlbums).map(([albumId, photos]) => {
          return {
            id: albumId,
            photos
          };
        });

        setAlbums(albumArray);
      });
  }, []);

  return (

    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Header />
          <div className='content'>
            <Albums albums={albums}/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites images={images} />} />
              <Route path="/album/:id" element={<Album albums={albums}/>} />
            </Routes>
          </div>
        </PersistGate>
      </Provider>
    </>

  );
}

export default App;
