import React from "react";
import "./App.css";
// import Gallery from "react-photo-gallery";
// import { photos } from "./components/HomeFeedPictures";
import Navbar from "./components/NavBar";
// import ScrollToTop from "./components/ScrollToTop";
import HomeFeed from "./components/HomeFeed";
import HomeFeedGallery from "./components/HomeFeedGallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <ScrollToTop /> */}
      <Navbar />
      <HomeFeed />
      <HomeFeedGallery />
      {/* <Gallery photos={photos} /> */}
      <Footer />
    </div>
  );
}

export default App;
