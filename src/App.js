import React from 'react';
import ImageGallery from './ImageGallery';

const App = () => {
  const images = [
    "https://sbcdn1.superbolter.com/atom/themes/otlhHiPryHzjBhDcX7mJ2Q/medium_24F__1_.jpg",
    "https://sbcdn1.superbolter.com/atom/themes/ppVgaTAdU-l_pbfZXHqw7w/medium_23F__1_.jpg",
    "https://sbcdn1.superbolter.com/atom/themes/v3whAd2IXZXde2_vo5Kc_w/medium_11F1.jpg",
    "https://sbcdn1.superbolter.com/atom/themes/Zc92-6ehMtPUN9eAezGcvg/medium_2F1.jpg",
    "https://sbcdn1.superbolter.com/atom/themes/qL7gPESavDrrRf6Ogdndmw/medium_19F__1_.jpg",
    "https://sbcdn1.superbolter.com/atom/themes/FQi0aYs8akZRif7FTxDbsg/medium_22r__1_.jpg"
  ];

  return (
    <div>
      <div className="App">
        <h1>Image Gallery</h1>
        <ImageGallery images={images} />
      </div>
    </div>
  );
}

export default App;







