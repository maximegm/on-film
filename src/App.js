import React from "react";
import "./App.css";
import Gallery from "react-photo-gallery";
import { photos } from "./components/HomeFeedPictures";
import Navbar from "./components/NavBar";
import HomeFeed from "./components/HomeFeed";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeFeed />
      <Gallery photos={photos} />
    </div>
  );
}

export default App;
